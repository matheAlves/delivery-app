const express = require('express');
const UserService= require('../service/UserService');
const { user } = require('../database/models/index');
const UserController = require('../controller/UserController');
const { productRoute } = require('../routes/productRoute');

const app = express();
const userService = new UserService(user);
const userController = new UserController(userService);

app.use('/products', productRoute)

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/users', userController.findAll);

module.exports = app;
