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
};

module.exports = UserService;