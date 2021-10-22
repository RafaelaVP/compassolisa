
class Repository  {
    constructor(schema){
        this._schema = schema
    }
  async findByParams(search) {
    return this._schema.find(search);
  }
  async create(payload) {
    return this._schema.create(payload)
  }
  async update(_id, payload){
      return this._schema.findByIdAndUpdate(_id, payload)
  }
  async delete(_id){
      return this._schema.findByIdAndRemove(_id)
  }
}


module.exports =  Repository;
