const md5 = require('md5');
const { user: UserModel } = require('../database/models');
// const joi = require('joi');

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

  getOneNoPassword: async (email) => {
    const user = await UserModel.findOne({
      where: {
        email,
      },
      attributes: { exclude: ['password'] },
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

  getAllSellers: async () => {
    const user = await UserModel.findAll({
      where: {
        role: 'seller',
      },
      attributes: { exclude: ['password', 'id', 'email', 'role'] },
      raw: true,
    });

    return user;
  },
};

module.exports = UserService;