const CarController = require('../app/controller/CarController');
const createValidation = require('../app/validation/create');

module.exports = (server, routes, prefix = '/user') => {
  routes.post('/', createValidation, CarController.create);
  server.use(prefix, routes);
}
