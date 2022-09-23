const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorHanlder = require('../middlewares/errorHandler');
const userRoute = require('../routes/users');
const { productRoute } = require('../routes/productRoute');
const registerRouter = require('../routes/register');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/images', express.static('./public'));
app.use('/register', registerRouter);

app.use(errorHanlder);

module.exports = app;
