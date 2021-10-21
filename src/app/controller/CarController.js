const CarService = require('../service/CarService');

class CarController  {
  async getAll(req, res) {
    const result = await CarService.listAll(req.query);
    return res.status(200).json(result)
  }
  async create (req, res) {
      const result = await CarService.create(req.body);
      return res.status(201).json(result)
  }
  async update(req,res) {
      const result = await CarService.update(req.body.params);
      return res.status(201).json(result)
  }
  async delete(req, res) {
      const result = await CarService.delete(req.params);
      return res.status(204).json(result)
  }
}

module.exports = new CarController();
