'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('products', { 

        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        sku: {
          type: Sequelize.STRING,
        },
        qtd: {
          type: Sequelize.INTEGER,
        },
        val: {
          type: Sequelize.DATE,
        },
        location: {
          type: Sequelize.STRING,
        },
        market_id: {
          type: Sequelize.INTEGER,
        },

    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('products');
  }
};

