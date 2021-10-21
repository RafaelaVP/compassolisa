const express = require('express');
const router = require('./routes');
const carRouter = require('./routes/carRouter');
require('./infra/database/connectionMongo');

class App {

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    router(this.server)
    this.server.use('/car', carRouter )

  }

}

module.exports = new App().server;
