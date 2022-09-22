const { Router } = require('express');
const ProductController = require('../controller/ProductController');

const productRoute = Router();

productRoute.get(('/'), ProductController.findAll);

module.exports = { productRoute };
