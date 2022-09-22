const UserService = require('../service/UserService');

const UserController = {
  getOneWichEmail: async (req, res) => {
    const { email } = req.body;

    const user = await UserService.getOneWichEmail(email);

    res.status(200).json(user);
  },
};

module.exports = UserController;
