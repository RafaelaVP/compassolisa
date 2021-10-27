const { Router } = require('express');
const car = require('./carRouter')
const client = require('./clientRouter')
const auth = require('./authRouter')

module.exports = server => {
  server.use((req, res, next) => {
    car(server, new Router());
    client(server, new Router());
    auth(server, new Router());
    next();
  });
}
