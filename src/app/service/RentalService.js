const RentalRepository = require('../repository/RentalRepository')
const validarCNPJ = require('../../helper/cnpj')
const buscaCep = require('../../app/repository/cepRepository');
const { request } = require('express');
const { Promise } = require('mongoose');

class RentalService {
  async getAll(search) {
      return await RentalRepository.findByParams(search);
  }
  async create(payload) {
        const enderecos = []
        const requests = []
        payload.endereco.forEach( busca => {
          requests.push (buscaCep(busca.cep)) 
        })
        const a = await Promise.all(requests).catch(error=>console.log(error))
        console.log(a.length)
        for(let index = 0; index < a.length;index++){
          enderecos.push({
               cep:a[index].cep,
               bairro:a[index].bairro,
               complemento:a[index].complemento,
               localidade:a[index].localidade,
               logradouro:a[index].logradouro,
               uf:a[index].uf,
               number:payload.endereco[index].number,
               isFilial:payload.endereco[index].isFilial
             })         
        }
          
        payload.endereco = enderecos
        const Valid = validarCNPJ(payload.cnpj)
        payload.cnpj = Valid
        return await RentalRepository.create(payload);       
      
   }
   async update(_id, payload) { 
    const rental = await this.getById(_id)  
    if(!rental) throw Error("O usuário não está na base")         
    return await RentalRepository.update({_id}, payload)                                 
 }
 async delete(id) {
  const find = await this.getById(id)
  if(!find) throw Error("Usuário não existe na base")
   return await RentalRepository.delete(id)               
 }
 async getById(_id) {
  const result = await RentalRepository.getById(_id) 
  if(!result) throw Error("Não encontrado usuário")
  return result
 }
}

module.exports = new RentalService();
