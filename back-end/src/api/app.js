const express = require('express');
const UserController = require('../controller/UserController');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/users', UserController.findAll);

module.exports = app;
