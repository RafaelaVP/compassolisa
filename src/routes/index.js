const { Router } = require('express');
const car = require('./carRouter')
const client = require('./ClientRouter')

module.exports = server => {
  server.use((req, res, next) => {
    car(server, new Router());
    client(server, new Router());
    next();
  });
}
