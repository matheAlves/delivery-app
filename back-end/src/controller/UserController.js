const UserService = require('../service/UserService');

const UserController = {
  getOneWichEmail: async (req, res) => {
    const { email } = req.body;

    const user = await UserService.getOneWichEmail(email);

    res.status(200).json(user);
  },

  createUser: async (req, res) => {
    const { name, email, password, role } = req.body;
    const newUser = await UserService.createUser({ name, email, password, role });
    return res.status(201).json(newUser);
  },
};

module.exports = UserController;
