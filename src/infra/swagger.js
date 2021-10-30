const swaggerJSDoc = require('swagger-jsdoc');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = require('../app');

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title: "compassolisa",
            description:"Api para aluguel de carros",
            contact: {
                name:"rafaela"
            },
            servers: ["localhost:3000"]
        }
    },
    apis:["app.js"]
}
const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use(api-docs, swaggerUiserve, swaggerui.setup(swaggerDocs))


//routes
/**
 * @swagger
 * /cars:
 *  get:
 *      description: Todos os carros!
 *      response:
 *       '200':
 *              description: sucess
 */

module.exports = swaggerOptions