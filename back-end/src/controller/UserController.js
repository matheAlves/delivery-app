const UserService = require('../service/UserService');

const UserController = {
  getOneNoPassword: async (req, res) => {
    const { email } = req.body;
    const user = await UserService.getOneNoPassword(email);
    
    res.status(200).json(user);
  },
};

module.exports = UserController;
