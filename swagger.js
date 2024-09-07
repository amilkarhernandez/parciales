const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: 'Parcial App',
        description: 'Documentacion Api para Parcial'
    },
    host: "parcial.nucleoslabs.com.co",
    schemes: ['https'],
};

const outputFile = './swagger-output.json'
const endpointsFile = ['./app.js']

swaggerAutogen(outputFile, endpointsFile, doc)
    .then(() => {
        require('./index.js');
    })