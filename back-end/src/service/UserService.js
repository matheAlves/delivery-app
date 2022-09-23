const md5 = require('md5');
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

  createUser: async ({ name, email, password, role }) => {
    const emailExists = await UserModel.findOne({ where: { email } });
    if (emailExists !== null) {
      throw new Error('User already exists');
    }

    const newPassword = md5(password);
    const newUser = await UserModel.create({ name, email, password: newPassword, role });
    return newUser;
  },
};

module.exports = UserService;