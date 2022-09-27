const SalesService = require('../service/SalesService');

const SalesController = {
  add: async (req, res) => {
    const result = await SalesService.add(req.body);
    res.status(200).json(result);
  },
};

module.exports = SalesController;