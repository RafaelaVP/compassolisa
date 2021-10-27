const ClientRepository = require('../repository/ClientRepository');

class ClientService {
  async getAll(search) {
    try {
      const result = await ClientRepository.findByParams(search);
      return result;
    } catch (error) {
      return error;
    }
  }
  async create(payload) {
      try {
          const result = await ClientRepository.create(payload);
          return result;
      } catch (error) {
          return error;
      }
   }
   async update(_id, payload) {
       try {
           const result = await ClientRepository.update(_id, payload)
           return result
       } catch (error) {
           return error;
       }
   }
   async delete(id) {
       try {
           const result = await ClientRepository.delete(id)
       } catch (error) {
           return error;
       }
   }
}

module.exports = new ClientService();
