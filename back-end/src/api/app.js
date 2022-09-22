const express = require('express');
const { productRoute } = require('../routes/productRoute');
const { userRoute } = require('../routes/users');

const app = express();

app.use('/products', productRoute);
app.use('/users', userRoute);

module.exports = app;
