const { Router } = require('express');
const SalesController = require('../controller/SalesController');

const salesRoute = Router();

salesRoute.post('/', SalesController.add);

module.exports = salesRoute;
