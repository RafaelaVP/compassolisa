const DescriptionService = require('../service/DescriptionService');

class DescriptionController {
  async getAll(req, res) {
    const result = await DescriptionService.listAll(req.query)
    return res.status(200).json(result);
  }

  async create(req, res) {
    const result = await DescriptionService.create(req.body);
    return res.status(201).json(result);
  }

  async update(req, res) {
    const result = await DescriptionService.update(req.body.params);
    return res.status(201).json(result);
  }

  async delete(req, res) {
    const result = await DescriptionService.delete(req.params);
    return res.status(204).json(result);
  }
}
module.exports = new DescriptionController();
