const RentalController = require('../app/controller/RentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.get('/', RentalController.getAll);
  routes.get('/:id', RentalController.getById);
  routes.post('/', RentalController.create);
  routes.delete('/:id', RentalController.delete);
  routes.put('/:id', RentalController.update);
  server.use(prefix, routes);
};
