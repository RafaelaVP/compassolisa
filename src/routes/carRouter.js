const CarController = require('../app/controller/CarController');
const Vallidation = require('../app/validation/carValidation/create')
const VallidCarId = require('../app/validation/carValidation/getById')
const VallidUp = require('../app/validation/carValidation/update')
module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.get('/', CarController.getAll);
  routes.get('/:id',VallidCarId , CarController.getById)
  routes.post('/',Vallidation, CarController.create);
  routes.delete('/:id',VallidCarId,CarController.delete);
  routes.put('/:id',VallidUp, VallidCarId, CarController.update)
  server.use(prefix, routes);
};

/// regex 0-9 A-F a-f
