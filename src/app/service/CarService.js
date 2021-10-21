const CarRepository = require('../repository/CarRepository');

class UserService {
  async create(payload) {
    try {
      const result = await CarRepository.create(payload);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new UserService();
