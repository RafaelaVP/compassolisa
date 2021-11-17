const CarController = require('../app/controller/CarController');
const Vallidation = require('../app/validation/carValidation/create');
const VallidCarId = require('../app/validation/carValidation/getById');
const VallidUp = require('../app/validation/carValidation/update');
const auth = require('../app/validation/auth');
const ValidAll = require('../app/validation/carValidation/getAll');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.get('/', ValidAll, auth, CarController.getAll);
  routes.get('/:id', VallidCarId, auth, CarController.getById);
  routes.post('/', Vallidation, auth, CarController.create);
  routes.delete('/:id', VallidCarId, auth, CarController.delete);
  routes.put('/:id', VallidUp, VallidCarId, auth, CarController.update);
  routes.patch('/:id/acessorios/:idacessorio', auth, CarController.patchUp);
  server.use(prefix, routes);
};
