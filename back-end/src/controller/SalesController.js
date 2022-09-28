const SalesService = require('../service/SalesService');
const { sale, salesProducts } = require('../database/models/index');

const SalesController = {
  add: async (req, res) => {
    const result = await SalesService.add(req.body);
    res.status(201).json(result);
  },

  getById: async (req, res) => {
    const result = await sale.findByPk(req.params.id);
    res.status(200).json(result);
  },

  salesProdsById: async (req, res) => {
    const result = await salesProducts.findAll({ where: { saleId: req.params.id } });
    res.status(200).json(result);
  },
};

module.exports = SalesController;