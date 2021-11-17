const moment = require('moment');
const ClientRepository = require('../repository/ClientRepository');
const cpfValid = require('../../helper/cpf');

class ClientService {
  async getAll(search) {
    return ClientRepository.findByParams(search);
  }

  async create(payload) {
    const Valid = cpfValid(payload.cpf);
    payload.cpf = Valid;
    const date = this.validDataNascimento(payload.data_nascimento);
    if (typeof date !== 'undefined') {
      return ClientRepository.create(payload);
    }
    throw Error(' menor de idade');
  }

  async update(_id, payload) {
    const client = await this.getById(_id);
    if (!client) throw Error('O usuário não está na base');
    return ClientRepository.update({ _id }, payload);
  }

  async delete(id) {
    const findClient = await this.getById(id);
    if (!findClient) throw Error('Usuário não existe na base');
    return ClientRepository.delete(id);
  }

  async getById(_id) {
    const result = await ClientRepository.getById(_id);
    if (!result) throw Error('Não encontrado usuário');
    return result;
  }

  validDataNascimento(userDate) {
    const formatData = moment(userDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const age = moment().diff(formatData, 'years');
    if (age < 18) {
      return undefined;
    }
    return age;
  }
}

module.exports = new ClientService();
