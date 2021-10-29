const ClientRepository = require('../repository/ClientRepository');
const { cpf } = require('cpf-cnpj-validator');
const moment = require('moment')

class ClientService {
  async getAll(search) {
    return await ClientRepository.findByParams(search);
  }
  async create(payload) {
        const Valid = this.validCPF(payload.cpf)
        payload.cpf = Valid
        const date = this.validDataNascimento(payload.data_nascimento)
        if(typeof date !== 'undefined'){
          return await ClientRepository.create(payload);       
      } 
      throw Error(" menor de idade")  
   }
   async update(_id, payload) { 
    const car = await this.getById(_id)  
    if(!car) throw Error("O usuário não está na base")         
    return await ClientRepository.update({_id}, payload)                                 
 }
 async delete(id) {
  const findCar = await this.getById(id)
  if(!findCar) throw Error("Usuário não existe na base")
   return await ClientRepository.delete(id)               
 }
 async getById(_id) {
  const result = await ClientRepository.getById(_id) 
  if(!result) throw Error("Não encontrado usuário")
  return result
 }
 validCPF(userCpf) {
   const cpfValid = cpf.isValid(userCpf)
   if(cpfValid === true)  {
     const trueCpf = cpf.format(userCpf)
     return trueCpf
   } throw new Error("Não é válido")
 }
 validDataNascimento(userDate) {
  const formatData = moment(userDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
  const dataT = moment().diff(formatData, 'years');
  if (dataT < 18) {
    return undefined
  }
  return dataT;
 }
}


module.exports = new ClientService();
