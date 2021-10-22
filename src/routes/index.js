const { Router } = require('express');
const car = require('./carRouter')
const description = require('./DescriptionRouter')

module.exports = server => {
  server.use((req, res, next) => {
    car(server, new Router());
    description(server, new Router());
    next();
  });
}
