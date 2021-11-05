const schemaCar = require('../schema/schemaCar');
const Repository = require('./Repository');

class CarRepository extends Repository  {

  constructor(){
    super(schemaCar)
  }

}


module.exports = new CarRepository();
