const { Router } = require('express');
const user = require('./carRouter')

module.exports = server => {
  server.use((req, res, next) => {
    user(server, new Router());
    next();
  });
}
