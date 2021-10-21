const CarRepository = require('../repository/CarRepository');

class CarService {
  async getAll(search) {
    try {
      const result = await CarRepository.find(search);
      return result;
    } catch (error) {
      return error;
    }
  }
  async create(payload) {
      try {
          const result = await CarRepository.create(payload);
          return result;
      } catch (error) {
          return error;
      }
   }
   async update(_id) {
       try {
           const result = await CarRepository.findByIdAndUpdate(_id, payload)
           return result
       } catch (error) {
           return error;
       }
   }
   async delete(id) {
       try {
           const result = await CarRepository.findOneAndDelete(id)
       } catch (error) {
           return error;
       }
   }
}

module.exports = new CarService();
