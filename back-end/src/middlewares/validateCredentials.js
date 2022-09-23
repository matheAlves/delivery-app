const md5 = require('md5');
const UserService = require('../service/UserService');

const validateCredentials = async (req, res, next) => {
  const { email: emailLogin, password: passwordLogin } = req.body;

  const credentials = await UserService.getOneWichEmail(emailLogin);

  if (!credentials) {
    throw new Error('Invalid email or password');
  }

  if (credentials.email !== emailLogin || credentials.password !== md5(passwordLogin)) {
    throw new Error('Invalid email or password');
  }

  next();
};

module.exports = validateCredentials;
