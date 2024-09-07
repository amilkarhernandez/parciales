const UsuarioModel = require("../models/Users");

module.exports.createUser = async (user) => {
    try {
        return await user.save();
    } catch (err) {
        if (err.code === 11000) { // MongoDB error code for duplicate key
            throw new Error('El correo electrónico ya está en uso');
        }
        if (err.name === 'ValidationError') {
            throw new Error('Datos no válidos: ' + err.message);
        } else {
            throw new Error('Error al guardar los datos en la base de datos');
        }
    }
};

module.exports.findOneUserByEmail = async (email) => {
    try {
        return await UsuarioModel.findOne({ email: email, status: true });
    } catch (err) {
        throw new Error('Email y/o contraseña Incorrecta');
    }
};