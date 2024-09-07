const express = require('express');
const productoController = require('../controllers/ProductosController');

const api = express.Router();

api.post('/productos/registrar', productoController.registrarProductos);
api.get('/productos/listar', productoController.ListAllProductos);
api.get('/productos/listar/:id', productoController.ListProductoById);

module.exports = api;