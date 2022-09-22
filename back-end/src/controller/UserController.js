class UserController {
  _service

  constructor(service) {
    this._service = service
  }

  findAll = async (_req, res) => {
    const result = await this._service.findAll();

    res.status(200).json(result);
  }
}

module.exports = UserController;
