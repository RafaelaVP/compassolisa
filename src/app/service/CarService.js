const CarRepository = require('../repository/CarRepository');

class CarService {
  async listAll(search) {
    try {
      const result = await CarRepository.findByParams(search);
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
   async update(_id, payload) {
       try {
           const result = await CarRepository.update(_id, payload)
           return result
       } catch (error) {
           return error;
       }
   }
   async delete(id) {
       try {
           const result = await CarRepository.delete(id)
       } catch (error) {
           return error;
       }
   }
}

module.exports = new CarService();
