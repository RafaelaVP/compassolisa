const RentalService = require('../service/RentalService');

class RentalController {
  async getAll(req, res) {
    try {
      const result = await RentalService.getAll(req.query)
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error)
    }
    
  }

  async create(req, res) {
    try {
      const result = await RentalService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error)

    }
    
  }
  async update(req, res) {
    try {
      const {id} = req.params
      const update = req.body
      const result = await RentalService.update(id, update)
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({message:error.message })
      }
     
 }    
 async delete(req, res) {
  try {
     const {id} = req.params
     const result = await RentalService.delete(id);
    return res.status(204).json(result);
  } catch (error) {
      return res.status(404).json({message: error.message})
  }
}
async getById( req,res) {
  try {
    const{id} = req.params
    const result = await RentalService.getById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({message:error.message});
  }
}
}

module.exports = new RentalController;
