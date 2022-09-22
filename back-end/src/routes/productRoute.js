const { product } = require('../database/models/index');
const ProductService = require('../service/ProductService');
const ProductController = require('../controller/ProductController');
const { Router } = require('express')

const productRoute = Router();

const service = new ProductService(product);
const controller = new ProductController(service);

productRoute.get(('/'), (req, res) => controller.findAll(req, res))

module.exports =  {
  productRoute
};
