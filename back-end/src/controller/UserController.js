const UserService = require('../service/UserService');

const UserController = {
  findAll: async (_req, res) => {
    const result = await UserService.findAll();

    res.status(200).json(result);
  },

  createUser: async (req, res) => {
    const { name, email, password, role } = req.body;
    const newUser = await UserService.createUser({ name, email, password, role });
    return res.status(201).json(newUser);
  },
};

module.exports = UserController;
