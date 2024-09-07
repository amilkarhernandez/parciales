const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductosSchema = schema({
    name: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    status: Boolean
}, { timestamps: true });

module.exports = mongoose.model("productos_collection", ProductosSchema);
