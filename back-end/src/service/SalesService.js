const { sale, salesProducts } = require('../database/models/index');

const SalesService = {
 add: async (payload) => {
    const { sales, saleProducts } = payload;

    const { dataValues } = await sale.create(sales);

    const map = saleProducts.map((product) => {
      const { productId, quantity } = product;
      const saleId = dataValues.id;
      return salesProducts.create({ productId, saleId, quantity });
    });

    await Promise.all(map);

    return dataValues;
  },
};

module.exports = SalesService;
