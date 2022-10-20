const route = require('express').Router();
const { tournamentController } = require('../controller/tournoument.controller');

route.post('/', tournamentController);

module.exports = {
    route,
}