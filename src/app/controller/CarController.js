const CarService = require('../service/CarService');

class CarController  {
  async getAll(req, res) {
    const result = await CarService.find();
    return res.status(200).json(result)
  }
  async post (req, res) {
      const result = await CarService.create(req.body);
      return res.status(201).json(result)
  }
  async patch(req,res) {
      const result = await CarService.findByIdAndUpdate(req.body.params);
      return res.status(201).json(result)
  }
  async delete(req, res) {
      const result = await CarService.findOneAndDelete(req.params);
      return res.status(204).json(result)
  }
}

module.exports = new CarController();
