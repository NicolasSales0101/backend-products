'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prod_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      prod_preco: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      prod_preco_desc: {
        type: Sequelize.DECIMAL(10,2),
        defaultValue: null
      },
      prod_qt_estoque: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      cate_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};