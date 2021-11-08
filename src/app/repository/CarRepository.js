const schemaCar = require('../schema/schemaCar');
const Repository = require('./Repository');
const { ObjectId } = require('mongodb');

class CarRepository extends Repository  {

  constructor(){
    super(schemaCar)
  }
  async updateAc (_id, payload) {
    return await this._schema.findOneAndUpdate({_id , 'acessorios._id':ObjectId(payload._id)}
    , {$set: {
      'acessorios.$.descricao':payload.descricao
    }}, 
    {
      new:true
    }
    )    
  }
  
} 


module.exports = new CarRepository();
