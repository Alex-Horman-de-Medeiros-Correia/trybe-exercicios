const express = require('express');
require('express-async-errors');
const { route } = require('./routes/tournoument.router');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('app is running'));

app.use('/tournament', route);

module.exports = app;
