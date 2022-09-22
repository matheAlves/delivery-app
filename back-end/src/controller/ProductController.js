const ProductService = require('../service/ProductService');

const ProductController = {
  findAll: async (_req, res) => {
    const result = await ProductService.findAll();
    res.status(200).json(result);
  },
};

module.exports = ProductController;