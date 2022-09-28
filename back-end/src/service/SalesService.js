const { sale, salesProducts } = require('../database/models/index');

const SalesService = {
 add: async (payload) => {
    const { sales, saleProducts } = payload;

    const { dataValues } = await sale.create(sales);

    saleProducts.forEach(async (product) => {
      const { productId, quantity } = product;
      const saleId = dataValues.id;
     await salesProducts.create({ productId, saleId, quantity });
    });

    return dataValues;
  },
};

module.exports = SalesService;
