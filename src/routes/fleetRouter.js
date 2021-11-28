const FleetController = require('../app/controller/FleetController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.get('/:idRental/fleet', FleetController.getAll);
  routes.get('/:idRental/fleet/:id', FleetController.getById);
  routes.post('/:idRental/car', FleetController.create);
  routes.delete('/:idRental/fleet/:id', FleetController.delete);
  routes.put('/:idRental/fleet/:id', FleetController.update);
  server.use(prefix, routes);
};
