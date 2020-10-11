const mongoose = require('mongoose');

const schema = mongoose.Schema;

const teste = new schema({
    video: {
        type: String,
        required: true,
        trim: true
    },
    foto: {
        type: String,
        required: true,
        trim: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    relevancia: {
        type: Number,
        required: true,
    },
    ano: {
        type: Number,
        required: true,
    },
    part: {
        type: Number,
        required: true,
    },
    
});

module.exports = mongoose.model('teste', teste);