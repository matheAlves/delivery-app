const { sale, salesProducts } = require('../database/models/index');

const SalesService = {
 add: async (payload) => {
    const { sales, saleProducts } = payload;

    const result = await sale.create(sales);
    const { dataValues } = result;

    saleProducts.forEach(async (product) => {
      const { productId, quantity } = product;
      const saleId = dataValues.id;
     await salesProducts.create({ productId, saleId, quantity });
    });

    return result;
  },
};

module.exports = SalesService;
