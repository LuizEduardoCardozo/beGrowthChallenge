'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name : {
          type: Sequelize.STRING,
        },
        password : {
          type: Sequelize.STRING,
        },
        local : {
          type: Sequelize.STRING,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};

