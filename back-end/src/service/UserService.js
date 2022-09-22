class UserService extends ServiceSQL {
  _model

  constructor(model) {
    this._model = model;
  }

  findAll = async () => {
    const result = await this._model.findAll();

    return result;
  }
}

module.exports = UserService;