const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UsuariosSchema = schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    status: Boolean
}, { timestamps: true });

module.exports = mongoose.model("usuarios_collection", UsuariosSchema);
