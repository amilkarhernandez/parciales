const jwt = require('jwt-simple');
const moment = require('moment');
require('dotenv').config()

exports.createToken = function (user) {
    const payload = {
        sub: user._id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(process.env.ACCESS_TOKEN_EXPIRE_MINUTES, 'days').unix(),
    }
    return jwt.encode(payload, process.env.SECRET_KEY, 'HS256');
}

exports.encript = function (field) {
    return jwt.encode(field, process.env.SECRET_KEY, process.env.ALGORITHM);
}

exports.verifyToken = function (token) {
    return jwt.decode(token, process.env.SECRET_KEY, process.env.ALGORITHM);
}