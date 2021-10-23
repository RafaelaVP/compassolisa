const CarController = require('../app/controller/CarController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.get('/', CarController.getAll);
  routes.post('/', CarController.create);
  routes.delete('/:id', CarController.delete);
  routes.put('/:id', CarController.update)
  server.use(prefix, routes);
};