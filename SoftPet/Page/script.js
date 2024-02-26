const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal'); /llama 'Animal'

// POST novo animal
router.post('/Cadastrar/index.html', async (req, res) => {
  try {
    const { nome, dono, telefone, animal, raca, nascimento } = req.body;
    const newAnimal = new Animal({ nome, dono, telefone, animal, raca, nascimento });
    await newAnimal.save();
    res.redirect('index.html');  principal
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;

const app = express();
app.use('app.js', router); 

app.get('index.html', async (req, res) => {
  const animals = await Animal.find();
  res.render('index', { animals });
});


app.use(express.static('public'));
    document.addEventListener('DOMContentLoaded', function() {
      const cadastroButton = document.getElementById('cadastro');
      const animalList = document.getElementById('animalList');

      cadastroButton.addEventListener('click', function() {
        const nome = prompt('Digite o nome do animal:');
        const dono = prompt('Digite o nome do dono:');
        const telefone = prompt('Digite o telefone do dono:');
        const especie = prompt('Digite a espécie do animal:');
        const raca = prompt('Digite a raça do animal:');
        const nascimento = prompt('Digite a data de nascimento do animal:');

        const animal = {
          nome: nome,
          dono: dono,
          telefone: telefone,
          especie: especie,
          raca: raca,
          nascimento: nascimento
        };

        // Adiciona o animal à lista
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${animal.nome}, Dono: ${animal.dono}, Telefone: ${animal.telefone}, Espécie: ${animal.especie}, Raça: ${animal.raca}, Nascimento: ${animal.nascimento}`;
        animalList.appendChild(listItem);

        // Salva o animal no armazenamento local do navegador
        saveAnimalToLocalStorage(animal);
      });

      function saveAnimalToLocalStorage(animal) {
        let animals = JSON.parse(localStorage.getItem('animals')) || [];
        animals.push(animal);
        localStorage.setItem('animals', JSON.stringify(animals));
      }

      // Carrega os animais salvos no armazenamento local ao carregar a página
      function loadAnimalsFromLocalStorage() {
        let animals = JSON.parse(localStorage.getItem('animals')) || [];
        animals.forEach(function(animal) {
          const listItem = document.createElement('li');
          listItem.textContent = `Nome: ${animal.nome}, Dono: ${animal.dono}, Telefone: ${animal.telefone}, Espécie: ${animal.especie}, Raça: ${animal.raca}, Nascimento: ${animal.nascimento}`;
          animalList.appendChild(listItem);
        });
      }

      loadAnimalsFromLocalStorage();
    });











  
  
        
    
  







