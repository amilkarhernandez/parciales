const usuarioRepository = require("../repositories/UsuarioRepository")
const { Response } = require("../utils/Response");
const JWT = require('../authorization/jwt')
const bcrypt = require('bcrypt-nodejs')
const crypto = require("../utils/Cryptojs")

async function loginUsuario(req, res) {
    const { email, password } = req.body;

    try {
        const findEmail = await usuarioRepository.findOneUserByEmail(email);
        if (findEmail) {
            bcrypt.compare(password, findEmail.password, function (err, check) {
                if (err) {
                    console.log(err);
                    Response.status = 404;
                    Response.message = 'Email y/o contraseña Incorrecta';
                    res.status(404).send(
                        Response
                    );
                }
                if (check) {
                    //Genera el token
                    //Se elimina la data sencible
                    findEmail.password = null;
                    res.status(200).send({
                        token: "Bearer",
                        access_token: JWT.createToken(extractUserLogin(findEmail)),
                        user: extractUserLogin(findEmail)
                    });
                } else {
                    Response.status = 404;
                    Response.message = 'Email y/o contraseña Incorrecta';
                    res.status(404).send(
                        Response
                    );
                }
            })
        } else {
            Response.status = 404;
            Response.message = 'Email y/o contraseña Incorrecta';
            res.status(404).send(
                Response
            );
        }
    }
    catch (err) {
        console.log(err);
        Response.status = 500;
        Response.message = err.message;
        res.status(500).send(
            Response
        );
    }
}

function extractUserLogin(user) {
    return {
        name: user.name,
        lastname: user.lastname,
        email: user.email
    }
}

module.exports = {
    loginUsuario
}