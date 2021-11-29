'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
      prod_name: "Mouse",
      prod_preco: 15.50,
      prod_preco_desc: 5.50,
      prod_qt_estoque: 10,
      cate_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      prod_name: "Teclado",
      prod_preco: 20.50,
      prod_preco_desc: 2.50,
      prod_qt_estoque: 20,
      cate_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
