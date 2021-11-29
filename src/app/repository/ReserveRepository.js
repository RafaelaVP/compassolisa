const schemaReserve = require('../schema/schemaReserve');
const Repository = require('./Repository');

class ReserveRepository extends Repository {
  constructor() {
    super(schemaReserve);
  }

  async getReserveByFleetAndRental(id_locadora, id_carro, data_inicio, data_fim, idReserve = undefined) {
    let query = {
      id_locadora,
      $or: [
        { id_carro },
        { data_inicio: { $lte: data_inicio }, data_fim: { $gte: data_fim } },
        { data_inicio: { $lte: data_inicio }, data_fim },
        { data_inicio: { $gte: data_inicio }, data_fim: { $lte: data_fim } },
        { data_inicio: { $gte: data_inicio }, data_fim },
        { data_inicio, data_fim: { $gte: data_fim } },
        { data_inicio, data_fim: { $lte: data_fim } },
        { data_inicio, data_fim }
      ]
    };
    if (idReserve) {
      query = Object.assign(query, { _id: { $ne: idReserve } });
    }
    const result = await schemaReserve.findOne(query);
    return result;
  }

  async findOneRemove(_id, id_locadora) {
    const result = await schemaReserve.findOneAndRemove({ _id, id_locadora });
    return result;
  }

  async findOne(_id, id_locadora) {
    const result = await schemaReserve.findOne({ _id, id_locadora });
    return result;
  }
}

module.exports = new ReserveRepository();
