'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {   
       await queryInterface.bulkInsert('Users', [{
        username: 'John TwoDoe',
        password: '123boademais',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        username: 'John ThreeDoe',
        password: '123boademais',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
