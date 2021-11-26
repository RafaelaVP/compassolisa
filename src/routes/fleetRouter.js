const FleetController = require('../app/controller/FleetController');

module.exports = (server, routes, prefix = '/api/v1/rental/:id') => {
  routes.get('/fleet', FleetController.getAll);
  routes.get('/fleet/:id', FleetController.getById);
  routes.post('/car', FleetController.create);
  routes.delete('/fleet/:id', FleetController.delete);
  routes.put('/fleet/:id', FleetController.update);
  server.use(prefix, routes);
};
