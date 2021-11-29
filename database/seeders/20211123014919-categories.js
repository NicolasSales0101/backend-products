'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [{
      cate_descricao: 'Informática',
      cate_perc_desc: 10,
      createdAt: new Date(),
      updatedAt: new Date()
      
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
