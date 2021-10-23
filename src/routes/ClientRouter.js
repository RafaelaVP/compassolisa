const ClientController = require('../app/controller/ClientController');

module.exports = (server, routes, prefix = '/api/v1/peaple') => {
  routes.get('/', ClientController.getAll);
  routes.post('/', ClientController.create);
  server.use(prefix, routes);
};
