const FleetService = require('../service/FleetService');
const { serialize, paginatedSerialize } = require('../serialize/fleetSerialize');

class FleetController {
  async getAll(req, res) {
    const result = await FleetService.getAll(req.query);
    return res.status(200).json(paginatedSerialize(result));
  }

  async create(req, res) {
    try {
      const { _id } = req.params;
      const result = await FleetService.create(_id, req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json({ description: error.description, name: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const update = req.body;
      const result = await FleetService.update(id, update);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await FleetService.delete(id);
      return res.status(204).json(result);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const result = await FleetService.getById(id);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new FleetController();
