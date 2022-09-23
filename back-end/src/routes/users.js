const { Router } = require('express');
const UserController = require('../controller/UserController');
const validateCredentials = require('../middlewares/validateCredentials');

const userRoute = Router();

userRoute.post(
  '/',
  validateCredentials,
  UserController.getOneWichEmail,
);

module.exports = userRoute;
