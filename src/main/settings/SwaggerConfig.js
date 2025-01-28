const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const constants = require('./ConstantsConfig');
const path = require('path');

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: constants.appName,
        version: constants.appVersion,
        description:
          "Description of the application",
      },
    },
    apis: [path.join(__dirname, '../api/**/*Router.js')], 
}

const spec = swaggerJsdoc(options);

module.exports = {
    path: '/api-docs',
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(spec)
}

