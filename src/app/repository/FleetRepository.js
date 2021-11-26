const schemaFleet = require('../schema/schemaFleet');
const Repository = require('./Repository');

class FleetRepository extends Repository {
  constructor() {
    super(schemaFleet);
  }
}

module.exports = new FleetRepository();
