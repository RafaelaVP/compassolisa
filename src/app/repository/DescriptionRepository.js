const schemaDescription = require('../schema/schemaDescription');
const Repository = require('./Repository');

class DescriptionRepository extends Repository  {
  constructor(){
    super(schemaDescription)
  }
}


module.exports = new DescriptionRepository();
