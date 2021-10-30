const CarService = require('../service/CarService');
const Serialize = require('../serialize/carSerializer')
class CarController {
  async getAll(req, res) {
    try {
      const result = await CarService.listAll(req.query)
      const paginatedSerialize = Serialize(result)
      return res.status(200).json(paginatedSerialize);
    } catch (error) {
      return error
    }      
  }
  async create(req, res) {
    try {
      const result = await CarService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error)    
    }  
  }
  async update(req, res) {
    try {
      const {id} = req.params
      const update = req.body
      const result = await CarService.update(id, update)
      console.log(result)
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({message:error.message })
      }
     
 }    
  async delete(req, res) {
      try {
         const {id} = req.params
         const result = await CarService.delete(id);
        return res.status(204).json(result);
      } catch (error) {
          return res.status(404).json({message: error.message})
      }
  }
  async getById( req,res) {
    try {
      const{id} = req.params
      const result = await CarService.getById(id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({message:error.message})
    }
  }
}
module.exports = new CarController();



//const update = {
   // modelo:modelo,
    //cor:cor,
    //ano:ano,
    //acessorios:acessorios,
   // descricao:descricao,
   // numeroPassageiros:numeroPassageiros
//}
