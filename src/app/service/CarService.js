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
    const car = await this.getById(_id)  
    if(!car) throw Error("O carro não está na base")         
   const result = await CarRepository.update({_id}, payload)                              
    return result
 }

   async delete(id) {
    const findCar = await this.getById(id)
    if(!findCar) throw Error("carro não existe na base")
    const result = await CarRepository.delete(id)
    return result          
       
   }
   async getById(_id) {
     const result = await CarRepository.getById(_id) 
     if(!result) throw Error("Não encontrado carro")
     return result
   }
}

module.exports = new CarService();

