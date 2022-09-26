const authService = require('../service/authService');
const UserService = require('../service/UserService');

const UserController = {
  getOneNoPassword: async (req, res) => {
    const { email } = req.body;
    const userCheck = await UserService.getOneNoPassword(email);
    const token = authService.createToken(userCheck);
    const user = {
      ...userCheck, token };

    res.status(200).json(user);
  },

  createUser: async (req, res) => {
    const { name, email, password, role } = req.body;
    const newUser = await UserService.createUser({ name, email, password, role });
    return res.status(201).json(newUser);
  },

  loginValidate: async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Missing token' });
    const readToken = authService.readToken(authorization);
    const { body: { role } } = readToken;
    res.status(200).json({ role });
  },
};

module.exports = UserController;
