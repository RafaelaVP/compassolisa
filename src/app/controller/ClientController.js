const ClientService = require('../schema/schemaClient');

class ClientController {
  async getAll(req, res) {
    const result = await ClientService.listAll(req.query)
    return res.status(200).json(result);
  }

  async create(req, res) {
    const result = await ClientService.create(req.body);
    return res.status(201).json(result);
  }

  async update(req, res) {
    const {id} = req.params
    const update = req.body
    const result = await ClientService.update(id, update)
    return res.status(201).json(result);
  }

  async delete(req, res) {
    try {
       const {id} = req.params
       const result = await CarService.delete(id);
       console.log(result)
      return res.status(204).json();
    } catch (error) {
        return res.status(400).json({
            message:'no'
        })
    }
}
}
module.exports = new ClientController;
