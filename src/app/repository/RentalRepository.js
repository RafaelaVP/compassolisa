const schemaRenatalCompany = require('../schema/schemaRentalCompany');
const Repository = require('./Repository');

class RenatlRepository extends Repository  {
  constructor(){
    super(schemaRenatalCompany)
  }
}


module.exports = new RenatlRepository();