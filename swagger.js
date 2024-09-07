const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: 'Parcial App',
        description: 'Documentacion Api para Parcial'
    },
    host: "37.60.252.97:3001",
    shemes: ['http']
};

const outputFile = './swagger-output.json'
const endpointsFile = ['./app.js']

swaggerAutogen(outputFile, endpointsFile, doc)
    .then(() => {
        require('./index.js');
    })