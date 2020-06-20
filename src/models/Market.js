const { Model, DataTypes } = require('sequelize');

class Market extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            local: DataTypes.STRING,
            lat: DataTypes.DECIMAL,
            long: DataTypes.DECIMAL,
        }, {
            sequelize,
            modelName: 'markets',
            timestamps: false,
        });
    }

}

module.exports = Market
