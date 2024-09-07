const express = require('express');
const productoController = require('../controllers/ProductosController');

const api = express.Router();

api.post('/productos/registrar', productoController.registrarProductos);
api.post('/productos/listar', productoController.ListAllProductos);
api.post('/productos/listar/:id', productoController.ListProductoById);

module.exports = api;