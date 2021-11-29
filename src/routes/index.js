const { Router } = require('express');
const car = require('./carRouter');
const client = require('./userRouter');
const auth = require('./authRouter');
const rental = require('./rentalRouter');
const swagger = require('./swaggerRoute');
const fleet = require('./fleetRouter');
const reserve = require('./reserveRouter');

module.exports = (server) => {
  server.use((req, res, next) => {
    car(server, new Router());
    client(server, new Router());
    auth(server, new Router());
    rental(server, new Router());
    fleet(server, new Router({ mergeParams: true }));
    reserve(server, new Router({ mergeParams: true }));
    swagger(server, new Router());
    next();
  });
};
