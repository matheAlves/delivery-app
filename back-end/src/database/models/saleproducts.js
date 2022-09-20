'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleProduct extends Model {
  }

  SaleProduct.init({
    saleId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'sales',
        key: 'id'
      }
    },
    productId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'SaleProducts',
    timestamps: false,
  });
  return SaleProduct;
};