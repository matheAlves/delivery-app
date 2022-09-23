const { Router } = require('express');
const UserController = require('../controller/UserController');

const registerRoute = Router();

registerRoute.post('/', UserController.createUser);

module.exports = registerRoute;
