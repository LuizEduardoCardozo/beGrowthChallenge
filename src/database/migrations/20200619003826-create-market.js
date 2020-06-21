'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('markets', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name : {
          type: Sequelize.STRING,
        },
        email : {
          type: Sequelize.STRING,
        },
        password : {
          type: Sequelize.STRING,
        },
        local : {
          type: Sequelize.STRING,
        },
        lat : {
          type: Sequelize.DECIMAL,
        },
        long : {
          type: Sequelize.DECIMAL,
        },
      
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('markets');
  }
};
