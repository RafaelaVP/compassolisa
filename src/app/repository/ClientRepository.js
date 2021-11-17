const schemaClient = require('../schema/schemaClient');
const Repository = require('./Repository');

class ClientRepository extends Repository {
  constructor() {
    super(schemaClient);
  }
}

module.exports = new ClientRepository();
