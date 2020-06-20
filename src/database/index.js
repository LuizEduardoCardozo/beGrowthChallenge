const Sequelize = require('sequelize');
const dbConf = require('../config/database');

const connection = new Sequelize(dbConf);

try {
    connection.authenticate()
} catch ( err ) {
    console.log(err);
}

const Market = require('../models/Market');


Market.init(connection);


module.exports = connection;
