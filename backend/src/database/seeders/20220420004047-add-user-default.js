'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { 
        username: 'gabriel', 
        password: '$2a$10$DrhXr8v2mj8s66XZaihWXuWE1/jKVd0.2DL9.l1l46Irc3mskkMOG' 
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
