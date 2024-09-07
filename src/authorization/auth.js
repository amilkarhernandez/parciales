
const jwt = require('jsonwebtoken');
require('dotenv').config()
module.exports = (req, res, next) => {
    //Comprobar qie existe el token
    if (!req.headers.authorization) {
        res.status(401).json({
            status: 401,
            message: "Acceso no Authorizado"
        });
    } else {
        //comprobar  la validez del token 
        let token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    status: 401,
                    message: "El Token Ingresado no se ha podido validar!"
                })
            } else {
                req.usuario = decoded;
                next();
            }
        });
    }


}