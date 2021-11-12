const CarController = require('../app/controller/CarController');
const Vallidation = require('../app/validation/carValidation/create')
const VallidCarId = require('../app/validation/carValidation/getById')
const VallidUp = require('../app/validation/carValidation/update')
const auth = require('../app/validation/auth')
const ValidAll = require('../app/validation/carValidation/getAll') 

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.get('/',ValidAll, CarController.getAll);
  routes.get('/:id',VallidCarId, CarController.getById)
  routes.post('/',Vallidation, CarController.create);
  routes.delete('/:id',VallidCarId ,CarController.delete);
  routes.put('/:id',VallidUp, VallidCarId, CarController.update)
  routes.patch('/:id/acessorios/:idacessorio' , CarController.patchUp)
  server.use(prefix, routes);
};

