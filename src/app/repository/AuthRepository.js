const schemaClient = require('../schema/schemaClient');
const Repository = require('./Repository');

class AuthRepository extends Repository {
  constructor() {
    super(schemaClient);
  }

  async findByEmail(search) {
    const { email } = search;
    return schemaClient.findOne({ email }).select('+senha');
  }
}

module.exports = new AuthRepository();
