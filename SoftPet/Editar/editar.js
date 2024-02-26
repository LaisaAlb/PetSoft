const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/Cadastrar/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.post('/Remover/index.html', (req, res) => {
    
    res.redirect('/Page/index.html');
});

// Define a rota para a página principal
app.get('/Page/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index', 'index.html'));
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
