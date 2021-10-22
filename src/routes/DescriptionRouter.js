const DescriptionController = require('../app/controller/DescriptionController');

module.exports = (server, routes, prefix = '/api/v1/car/description') => {
  routes.get('/', DescriptionController.getAll);
  routes.post('/', DescriptionController.create);
  server.use(prefix, routes);
};
