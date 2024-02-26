const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    dono: { type: String, required: true },
    telefone: { type: Number, required: true },
    animal: { type: String, required: true },
    raca: { type: String, required: true },
    nascimento: Date
});

module.exports = mongoose.model('Animal', animalSchema);
