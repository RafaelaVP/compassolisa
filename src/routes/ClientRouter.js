const ClientController = require('../app/controller/ClientController');
const Vallidation = require('../app/validation/clientValidation/create')
module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.get('/', ClientController.getAll);
    routes.get('/:id' , ClientController.getById)
    routes.post('/',Vallidation, ClientController.create);
    routes.delete('/:id', ClientController.delete);
    routes.put('/:id', ClientController.update)
    server.use(prefix, routes);
  };
