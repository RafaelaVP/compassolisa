const { findOneAndUpdate } = require('../schema/schemaCar');
const CarSchema = require('../schema/schemaCar');

class CarRepository  {
  async getAll(search) {
    return CarSchema.find(search);
  }
  async create(payload) {
    return CarSchema.create(payload)
  }
  async update(_id){
      return CarSchema.findByIdAndUpdate(_id, payload)
  }
  async delete(id){
      return CarSchema.findOneAndDelete(id)
  }
}


module.exports = new CarRepository();
