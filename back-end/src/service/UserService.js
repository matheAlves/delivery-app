const { user } = require('../database/models/index');

const UserService = {
 findAll: async () => {
    const result = await user.findAll();

    return result;
  },
};

module.exports = UserService;