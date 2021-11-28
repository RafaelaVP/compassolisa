const schemaReserve = require('../schema/schemaReserve');
const Repository = require('./Repository');

class ReserveRepository extends Repository {
  constructor() {
    super(schemaReserve);
  }
}

module.exports = new ReserveRepository();
