const express = require('express');
const usuarioController = require('../controllers/UsuarioController');

const api = express.Router();

api.post('/usuarios/registrar', usuarioController.registrarUsuario);

module.exports = api;