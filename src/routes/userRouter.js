const ClientController = require('../app/controller/ClientController');
const Validation = require('../app/validation/clientValidation/create');
const ValidPeopleId = require('../app/validation/getById');
const ValidUp = require('../app/validation/clientValidation/update');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.get('/', ClientController.getAll);
  routes.get('/:id', ValidPeopleId, ClientController.getById);
  routes.post('/', Validation, ClientController.create);
  routes.delete('/:id', ValidPeopleId, ClientController.delete);
  routes.put('/:id', ValidPeopleId, ValidUp, ClientController.update);
  server.use(prefix, routes);
};
