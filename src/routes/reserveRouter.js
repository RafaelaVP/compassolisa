const ReserveController = require('../app/controller/ReserveController');

module.exports = (server, routes, prefix = '/api/v1/rental/') => {
  routes.get('/:idRental/reserve', ReserveController.getAll);
  routes.get('/:idRental/reserve/:id', ReserveController.getById);
  routes.post('/:idRental/reserve', ReserveController.create);
  routes.delete('/:idRental/reserve/:id', ReserveController.delete);
  routes.put('/:idRental/reserve/:id', ReserveController.update);
  server.use(prefix, routes);
};
