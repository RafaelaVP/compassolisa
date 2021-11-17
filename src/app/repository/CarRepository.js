const { ObjectId } = require('mongodb');
const schemaCar = require('../schema/schemaCar');
const Repository = require('./Repository');

class CarRepository extends Repository {
  constructor() {
    super(schemaCar);
  }

  async updateAc(_id, payload) {
    return this._schema.findOneAndUpdate(
      { _id, 'acessorios._id': ObjectId(payload._id) },
      {
        $set: {
          'acessorios.$.descricao': payload.descricao
        }
      },
      {
        new: true
      }
    );
  }
}

module.exports = new CarRepository();
