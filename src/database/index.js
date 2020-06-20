const Sequelize = require('sequelize');
const dbConf = require('../config/database');

const connection = new Sequelize(dbConf);

try {
    connection.authenticate()
} catch ( err ) {
    console.log(err);
}

const Market = require('../models/Market');
const User = require('../models/Users');


Market.init(connection);
User.init(connection);

module.exports = connection;
