const ClientController = require('../app/controller/ClientController');

module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.get('/', ClientController.getAll);
    routes.post('/', ClientController.create);
    routes.delete('/:id', ClientController.delete);
    routes.put('/:id', ClientController.update)
    server.use(prefix, routes);
  };
