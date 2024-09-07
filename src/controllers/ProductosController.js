const { Response } = require("../utils/Response");
const productoModel = require("../models/Productos");
const productoRepository = require('../repositories/ProductosRepository')

async function registrarProductos(req, res) {
    const producto = new productoModel();

    const { name, description, marca, image } = req.body;

    try {

        // Crear Modelo
        producto.name = name;
        producto.description = description;
        producto.marca = marca;
        producto.image = image;

        // Guardar el Producto en el repositorio
        const resp = await productoRepository.createProductos(producto);
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

async function ListProductoById(req, res) {
    const id = req.params['id'];
    try {
        const resp = await productoRepository.ListProductoById(id);
        if (resp) {
            Response.status = 200;
            Response.message = "Success Data Fetch";
            Response.result = resp;
            res.status(200).send(
                Response
            );
        } else {
            Response.status = 404;
            Response.message = "No Se encontraron registros";
            Response.result = null
            res.status(404).send(
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

async function ListAllProductos(req, res) {
    try {
        const resp = await productoRepository.ListAllProductos();
        if (resp) {
            Response.status = 200;
            Response.message = "Success Data Fetch";
            Response.result = resp;
            res.status(200).send(
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
    registrarProductos,
    ListProductoById,
    ListAllProductos
}