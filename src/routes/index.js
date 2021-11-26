const { Router } = require('express');
const car = require('./carRouter');
const client = require('./userRouter');
const auth = require('./authRouter');
const rental = require('./rentalRouter');
const swagger = require('./swaggerRoute');
const fleet = require('./fleetRouter');

module.exports = (server) => {
  server.use((req, res, next) => {
    car(server, new Router());
    client(server, new Router());
    auth(server, new Router());
    rental(server, new Router());
    fleet(server, new Router());
    swagger(server, new Router());
    next();
  });
};
