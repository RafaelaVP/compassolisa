const FleetRepository = require('../repository/FleetRepository');
const RentalRepository = require('../repository/RentalRepository');
const CarRepository = require('../repository/CarRepository');

class FleetService {
  async getAll(search) {
    const result = await FleetRepository.findByParams(search);
    return result;
  }

  async create(_id, payload) {
    const { id_locadora, id_carro, placa } = payload;
    const rental = await RentalRepository.getById(id_locadora);
    if (!rental) throw new Error();
    const car = await CarRepository.getById(id_carro);
    if (!car) throw new Error();
    const validyPlaca = await FleetRepository.findByParams({ placa });

    if (validyPlaca.docs.length > 0) {
      throw new Error('You already have this board');
    }

    const result = await FleetRepository.create(payload);
    console.log(result);

    return result;
  }

  async update(_id, payload) {
    const fleet = await this.getById(_id);
    if (!fleet) throw Error('A frota não está na base');
    const result = await FleetRepository.update({ _id }, payload);
    return result;
  }

  async delete(id) {
    const findFleet = await this.getById(id);
    if (!findFleet) throw Error('não encontrada frota');
    const result = await FleetRepository.delete(id);
    return result;
  }

  async getById(_id) {
    const result = await FleetRepository.getById(_id);
    if (!result) throw Error('não encontrada frota');
    return result;
  }
}

module.exports = new FleetService();
