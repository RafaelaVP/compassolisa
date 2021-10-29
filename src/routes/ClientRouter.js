const ClientController = require('../app/controller/ClientController');
const Vallidation = require('../app/validation/clientValidation/create')
const VallidPeopleId = require('../app/validation/clientValidation/getById')
const VallidUp = require('../app/validation/clientValidation/update')

module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.get('/', ClientController.getAll);
    routes.get('/:id' , VallidPeopleId, ClientController.getById)
    routes.post('/',Vallidation, ClientController.create);
    routes.delete('/:id', VallidPeopleId, ClientController.delete);
    routes.put('/:id',VallidPeopleId,VallidUp, ClientController.update)
    server.use(prefix, routes);
  };
