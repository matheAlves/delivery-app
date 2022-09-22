const { Router } = require('express');
const UserController = require('../controller/UserController');

const userRoute = Router();

userRoute.get(('/'), UserController.findAll);

module.exports = { userRoute };
