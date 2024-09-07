const express = require('express');
const authController = require('../controllers/AuthController');

const api = express.Router();

api.post('/usuarios/login', authController.loginUsuario);

module.exports = api;