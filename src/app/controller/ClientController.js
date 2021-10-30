const ClientService = require('../service/ClientService');
const Serialize = require('../serialize/clientSerialize')


class ClientController {
  async getAll(req, res) {
    const result = await ClientService.getAll(req.query)
    const paginatedSerialize = Serialize(result)
    return res.status(200).json(paginatedSerialize);
  }

  async create(req, res) {
    try {
      const result = await ClientService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({message:error.message })

    }
    
  }
  async update(req, res) {
    try {
      const {id} = req.params
      const update = req.body
      const result = await ClientService.update(id, update)
      console.log(result)
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({message:error.message })
      }
     
 }    
 async delete(req, res) {
  try {
     const {id} = req.params
     const result = await ClientService.delete(id);
    return res.status(204).json(result);
  } catch (error) {
      return res.status(404).json({message: error.message})
  }
}
async getById( req,res) {
  try {
    const{id} = req.params
    const result = await ClientService.getById(id)
    return res.status(200).json(result)
  } catch (error) {
    return res.status(400).json({message:error.message})
  }
}
}

module.exports = new ClientController;
