const UserService = require('../service/UserService');

const UserController = {
  findAll: async (_req, res) => {
    const result = await UserService.findAll();

    res.status(200).json(result);
  },
};

module.exports = UserController;
