'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      sellerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2)
      },
      deliveryAddress: {
        type: Sequelize.STRING(100)
      },
      deliveryNumber: {
        type: Sequelize.STRING(50)
      },
      saleDate: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING(50)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};