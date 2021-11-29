const ReserveService = require('../service/ReserveService');
const { serialize, paginatedSerialize } = require('../serialize/reserveSerialize');

class ReserveController {
  async getAll(req, res) {
    const result = await ReserveService.getAll(req.query);
    return res.status(200).json(paginatedSerialize(result));
  }

  async create(req, res) {
    try {
      const { idRental } = req.params;

      const result = await ReserveService.create(idRental, req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json({ description: error.description, name: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const update = req.body;
      const result = await ReserveService.update(id, update);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await ReserveService.delete(id);
      return res.status(204).json(result);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const result = await ReserveService.getById(id);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new ReserveController();
