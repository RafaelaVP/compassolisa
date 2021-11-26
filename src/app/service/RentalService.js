const { Promise } = require('mongoose');
const RentalRepository = require('../repository/RentalRepository');
const validarCNPJ = require('../../helper/cnpj');
const buscaCep = require('../repository/cepRepository');

class RentalService {
  async getAll(search) {
    return RentalRepository.findByParams(search);
  }

  async create(payload) {
    const enderecos = [];
    const requests = [];
    payload.endereco.forEach((busca) => {
      requests.push(buscaCep(busca.cep));
    });
    const cep = await Promise.all(requests);
    for (let index = 0; index < cep.length; index++) {
      enderecos.push({
        cep: cep[index].cep,
        bairro: cep[index].bairro,
        complemento: cep[index].complemento,
        localidade: cep[index].localidade,
        logradouro: cep[index].logradouro,
        uf: cep[index].uf,
        number: payload.endereco[index].number,
        isFilial: payload.endereco[index].isFilial
      });
    }

    payload.endereco = enderecos;
    validarCNPJ(payload.cnpj);

    return RentalRepository.create(payload);
  }

  async update(_id, payload) {
    const rental = await this.getById(_id);
    if (!rental) throw Error('O usuário não está na base');
    return RentalRepository.update({ _id }, payload);
  }

  async delete(id) {
    const find = await this.getById(id);
    if (!find) throw Error('Usuário não existe na base');
    return RentalRepository.delete(id);
  }

  async getById(_id) {
    const result = await RentalRepository.getById(_id);
    if (!result) throw Error('Não encontrado usuário');
    return result;
  }
}

module.exports = new RentalService();
