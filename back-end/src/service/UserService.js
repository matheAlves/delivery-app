const ServiceSQL = require('./ServiceSQL');

class UserService extends ServiceSQL {
  constructor(model) {
    super(model)
  }
}

module.exports = UserService;