const ReserveRepository = require('../repository/ReserveRepository');
const RentalRepository = require('../repository/RentalRepository');
const ClientRepository = require('../repository/ClientRepository');
const FleetRepository = require('../repository/FleetRepository');
const toDate = require('../../helper/toDate');

class ReserveService {
  async getAll(search) {
    const result = await ReserveRepository.findByParams(search);
    return result;
  }

  async create(_id, payload) {
    payload.data_inicio = toDate(payload.data_inicio);
    payload.data_fim = toDate(payload.data_fim);
    const { id_carro, id_user, data_fim, data_inicio } = payload;
    payload.id_locadora = _id;
    const rental = await RentalRepository.getById(_id);
    if (!rental) throw new Error('esse');
    const fleet = await FleetRepository.getById(id_carro);
    if (!fleet) throw new Error('não');
    const user = await ClientRepository.getById(id_user);
    if (!user) throw new Error('ou esse');
    if (user.habilitado !== 'sim') throw new Error('não é habilitado');

    const check = await ReserveRepository.getReserveByFleetAndRental(_id, id_carro, data_inicio, data_fim);
    if (!check) throw new Error();
    const result = await ReserveRepository.create(payload);

    return result;
  }

  async update(_id, payload) {
    const reserve = await this.getById(_id);
    if (!reserve) throw Error('A reserva não está na base');
    const result = await ReserveRepository.update({ _id }, payload);
    return result;
  }

  async delete(id) {
    const findReserve = await this.getById(id);
    if (!findReserve) throw Error('não encontrada reserva');
    const result = await ReserveRepository.delete(id);
    return result;
  }

  async getById(_id) {
    const result = await ReserveRepository.getById(_id);
    if (!result) throw Error('não encontrada reserva');
    return result;
  }
}

module.exports = new ReserveService();
