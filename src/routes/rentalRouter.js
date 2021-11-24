const RentalController = require('../app/controller/RentalController');
const validCreate = require('../app/validation/rentalValidation/create');
const validUp = require('../app/validation/rentalValidation/update');
const validId = require('../app/validation/getById');
const validAll = require('../app/validation/rentalValidation/getAll');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.get('/', validAll, RentalController.getAll);
  routes.get('/:id', validId, RentalController.getById);
  routes.post('/', validCreate, RentalController.create);
  routes.delete('/:id', validId, RentalController.delete);
  routes.put('/:id', validUp, validId, RentalController.update);
  server.use(prefix, routes);
};
