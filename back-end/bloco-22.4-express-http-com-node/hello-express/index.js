/* const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
} */

/* index.js */
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

/* app.get('/recipes', function (req, res) {
  res.json(recipes);
}); */

app.get('/recipes/search', (req, res) => {
    const { name, maxPrice, minPrice } = req.query;

    const filtrandoReceita = recipes.filter((element) => element.name.includes(name)
    && element.price < Number(maxPrice) && element.price >= Number(minPrice));

    res.status(200).json(filtrandoReceita);
});

app.get('/recipes/:id', function (req, res) {
    const { id } = req.params;
    const recipe = recipes.find((r) => r.id === Number(id));
  
    if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  
    res.status(200).json(recipe);
  });

  app.get('/drinks/search', function (req, res) {
    const { name } = req.query;
    const drink = drinks.filter((element) => element.name.includes(name));
  
    /* if (!drink) return res.status(404).json({ message: 'drink not found!'}); */
  
    res.status(200).json(drink);
  });

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});

