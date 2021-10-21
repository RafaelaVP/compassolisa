const { findOneAndUpdate } = require('../schema/schemaCar');
const CarSchema = require('../schema/schemaCar');

class CarRepository  {
  async getAll(search) {
    return CarSchema.find(search);
  }
  async create(post) {
    return CarSchema.create(post)
  }
  async patch(_id){
      return CarSchema.findByIdAndUpdate(_id, update)


  }
  async delete(fim){
      return CarSchema.findOneAndDelete(fim)
  }
}


module.exports = new CarRepository();
