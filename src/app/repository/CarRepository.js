const schemaCar = require('../schema/schemaCar');
const Repository = require('./Repository');

class CarRepository extends Repository  {

  constructor(){
    super(schemaCar)
  }
  async findByParams(search) {
    return this._schema.find(search).populate('descricao',['descricao'])
  }
}


module.exports = new CarRepository();
