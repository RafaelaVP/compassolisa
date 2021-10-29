const schemaClient = require('../schema/schemaClient');
const ClientService = require('../service/ClientService');
const bcrypt = require('bcrypt');

class ClientController {
  async getAll(req, res) {
    const result = await ClientService.getAll(req.query)
    return res.status(200).json(result);
  }

  async create(req, res) {
    const result = await ClientService.create(req.body);
    //const {senha, ...user} = result.toObject()

    return res.status(201).json(result);
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
