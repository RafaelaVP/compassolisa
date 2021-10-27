const AuthController = require('../app/controller/AuthController')

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
    routes.post('/', AuthController.find);
    routes.post('/login', AuthController.auth)
    server.use(prefix, routes);
  };
