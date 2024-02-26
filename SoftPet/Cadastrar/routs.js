// routes/cadastro.js
const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');

// Rota para salvar um novo animal
router.post('/cadastrar', async (req, res) => {
    try {
        const { nome, dono, telefone, especie, raca, nascimento } = req.body;
        const newAnimal = new Animal({ nome, dono, telefone, especie, raca, nascimento });
        await newAnimal.save();
        res.status(201).json({ message: 'Animal cadastrado com sucesso' });
    } catch (error) {
        console.error('Erro ao cadastrar animal', error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

// Rota para obter todos os animais cadastrados
router.get('/animais', async (req, res) => {
    try {
        const animais = await Animal.find();
        res.status(200).json(animais);
    } catch (error) {
        console.error('Erro ao obter animais', error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

module.exports = router;
