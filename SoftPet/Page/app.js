const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('index.html', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

// Rota para salvar o cadastro
app.post('/Cadastrar/index.html', (req, res) => {
    const { nome, dono, telefone, animal, raca, nascimento } = req.body;

 const Animal = require('./models/Animal');
    const novoAnimal = new Animal({ nome, dono, telefone, animal, raca, nascimento });
    novoAnimal.save()
        .then(() => {
            res.redirect('index.html'); 
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro no servidor ao salvar o cadastro.');
        });
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
