const { user: UserModel } = require('../database/models');

const UserService = {
  findAll: async () => {
    const result = await UserModel.findAll();

    return result;
  },
};

module.exports = UserService;