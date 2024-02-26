const express = require('express');
const app = express();
const path = require('path');

// Define o diretório onde os arquivos estáticos serão servidos
app.use(express.static(path.join(__dirname, 'public')));

// Define a rota para renderizar a página de cadastro
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

// Define a rota para processar o formulário de remoção
app.post('/remover', (req, res) => {
    // Aqui você pode adicionar o código para processar o formulário de remoção

    // Redireciona para a página principal
    res.redirect('/');
});

// Define a rota para a página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index', 'index.html'));
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
