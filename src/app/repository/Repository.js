
class Repository  {
    constructor(schema){
        this._schema = schema
    }
  async findByParams(search) {
    const {limit=100, offset=1, ...query} = search
    return this._schema.paginate({query},{
       limit:Number(limit)
      , offset:Number(offset)
    });
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
