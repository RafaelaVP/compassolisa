const DescriptionRepository = require('../repository/DescriptionRepository');

class DescriptionService {
  async listAll(search) {
    try {
      const result = await DescriptionRepository.findByParams(search);
      return result;
    } catch (error) {
      return error;
    }
  }
  async create(payload) {
      try {
          const result = await DescriptionRepository.create(payload);
          return result;
      } catch (error) {
          return error;
      }
   }
   async update(_id, payload) {
       try {
           const result = await DescriptionRepository.update(_id, payload)
           return result
       } catch (error) {
           return error;
       }
   }
   async delete(id) {
       try {
           const result = await DescriptionRepository.delete(id)
       } catch (error) {
           return error;
       }
   }
}

module.exports = new DescriptionService();
