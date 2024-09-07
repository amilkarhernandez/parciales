const { Response } = require("../utils/Response");
const UsuarioModel = require("../models/Users");
const usuarioRepository = require('../repositories/UsuarioRepository')

const bcrypt = require("bcrypt-nodejs");

async function registrarUsuario(req, res) {

    const usuario = new UsuarioModel();
    const { name, lastname, email, password } = req.body;


    try {
        // Encriptación
        bcrypt.hash(password, null, null, async function (err, hash) {
            if (hash) {
                usuario.password = hash;
            }
        });

        // Crear Modelo
        usuario.name = name;
        usuario.lastname = lastname;
        usuario.email = email;
        usuario.status = true;

        // Guardar el usuario en el repositorio
        const resp = await usuarioRepository.createUser(usuario);
        if (resp) {
            Response.status = 201;
            Response.message = "Datos guardados correctamente en la base de datos";
            Response.result = resp;
            res.status(201).send(
                Response
            );
        }

    } catch (err) {
        console.log(err);
        Response.status = 500;
        Response.message = err.message;
        res.status(500).send(
            Response
        );
    }
}

module.exports = {
    registrarUsuario
}