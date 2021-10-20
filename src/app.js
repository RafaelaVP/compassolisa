const express = require('express')
require('./infra/database/connectionMongo')
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware(){
        this.express.use(express.json());
    }
    routes(){
        this.express.use('/', )
        this.express.use('/', )
    }
}
 module.exports = new App().express;