const { user: UserModel } = require('../database/models');

const UserService = {
  getOneWichEmail: async (email) => {
    const user = await UserModel.findOne({
      where: {
        email,
      },
      raw: true,
    });

    return user;
  },
};

module.exports = UserService;