const CarController = require('../app/controller/CarController');
const Validation = require('../app/validation/carValidation/create');
const ValidCarId = require('../app/validation/getById');
const ValidUp = require('../app/validation/carValidation/update');
const auth = require('../app/validation/auth');
const ValidAll = require('../app/validation/carValidation/getAll');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.get('/', ValidAll, auth, CarController.getAll);
  routes.get('/:id', ValidCarId, auth, CarController.getById);
  routes.post('/', Validation, auth, CarController.create);
  routes.delete('/:id', ValidCarId, auth, CarController.delete);
  routes.put('/:id', ValidUp, ValidCarId, auth, CarController.update);
  routes.patch('/:id/acessorios/:idacessorio', auth, CarController.patchUp);
  server.use(prefix, routes);
};
