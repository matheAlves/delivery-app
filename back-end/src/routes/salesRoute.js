const { Router } = require('express');
const SalesController = require('../controller/SalesController');

const salesRoute = Router();

salesRoute.post('/', SalesController.add);
salesRoute.get('/', SalesController.getOrders);

module.exports = salesRoute;
