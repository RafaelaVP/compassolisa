const CarController = require('../app/controller/CarController');
const createValidation = require('../app/validation/create');

module.exports = (server, routes, prefix = '/') => {
  routes.get('/' , CarController.getAll);
  server.use(prefix, routes);
}
