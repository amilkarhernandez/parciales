const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: 'Parcial App',
        description: 'Documentacion Api para Parcial'
    },
    host: "localhost:3001",
    shemes: ['http']
};

const outputFile = './swagger-output.json'
const endpointsFile = ['./app.js']

swaggerAutogen(outputFile, endpointsFile, doc)
    .then(() => {
        require('./index.js');
    })