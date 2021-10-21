const { findOneAndUpdate } = require('../schema/schemaCar');
const CarSchema = require('../schema/schemaCar');

class CarRepository  {
  async findByParams(search) {
    return CarSchema.find(search);
  }
  async create(payload) {
    return CarSchema.create(payload)
  }
  async update(_id, payload){
      return CarSchema.findByIdAndUpdate(_id, payload)
  }
  async delete(id){
      return CarSchema.findByIdAndDelete(id)
  }
}


module.exports = new CarRepository();
