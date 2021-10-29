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
    const car = await this.getById(_id)  
    if(!car) throw Error("O usuário não está na base")         
   const result = await ClientRepository.update({_id}, payload)                              
    return result
 }
 async delete(id) {
  const findCar = await this.getById(id)
  if(!findCar) throw Error("Usuário não existe na base")
  const result = await ClientRepository.delete(id)
  return result               
 }
 async getById(_id) {
  const result = await ClientRepository.getById(_id) 
  if(!result) throw Error("Não encontrado usuário")
  return result
 }
}


module.exports = new ClientService();
