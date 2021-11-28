const ReserveRepository = require('../repository/ReserveRepository');
const RentalRepository = require('../repository/RentalRepository');
const CarRepository = require('../repository/CarRepository');
const ClientRepository = require('../repository/ClientRepository');

class ReserveService {
  async getAll(search) {
    const result = await ReserveRepository.findByParams(search);
    return result;
  }

  async create(_id, payload) {
    const { id_locadora, id_carro, id_user } = payload;
    const rental = await RentalRepository.getById(id_locadora);
    if (!rental) throw new Error();
    const car = await CarRepository.getById(id_carro);
    if (!car) throw new Error();
    const user = await ClientRepository.getById(id_user);
    if (!user) throw new Error();
    const result = await ReserveRepository.create(payload);
    console.log(result);
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
