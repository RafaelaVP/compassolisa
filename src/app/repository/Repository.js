
class Repository  {
    constructor(schema){
        this._schema = schema
    }
  async findByParams(search) {
    return this._schema.paginate(search, {limit:100});
  }
  async create(payload) {
    return this._schema.create(payload)
  }
  async update(_id, payload){
      return await this._schema.findByIdAndUpdate(_id, payload, {new:true})
  }
  async delete(_id){
      return this._schema.findByIdAndRemove(_id)
  }
  async getById (_id){
    return this._schema.findById(_id)
  }
}


module.exports =  Repository;
