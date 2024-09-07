const ProuctoModel = require("../models/Productos");

module.exports.createProductos = async (producto) => {
    try {
        return await producto.save();
    } catch (err) {
        if (err.name === 'ValidationError') {
            throw new Error('Datos no válidos: ' + err.message);
        } else {
            throw new Error('Error al guardar los datos en la base de datos');
        }
    }
};

module.exports.ListAllProductos = async () => {
    try {
        return await ProuctoModel.find();
    } catch (err) {
        throw new Error('Error al guardar los datos en la base de datos');
    }
};

module.exports.ListProductoById = async (productoId) => {
    try {
        return await ProuctoModel.findOne({ _id: productoId });
    } catch (err) {
        throw new Error('Error al guardar los datos en la base de datos');
    }
};