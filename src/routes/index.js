const { Router } = require('express');
const car = require('./carRouter')
const client = require('./clientRouter')
const auth = require('./authRouter')
const rental = require('./rentalRouter')

module.exports = server => {
  server.use((req, res, next) => {
    car(server, new Router());
    client(server, new Router());
    auth(server, new Router());
    rental(server, new Router());
    next();
  });
}
