const { Model, DataTypes } = require('sequelize');

class Product extends Model {

    static init(sequelize) {
        super.init({
            sku: DataTypes.STRING,
            qtd: DataTypes.INTEGER,
            val: DataTypes.INTEGER,
            location: DataTypes.STRING,
            market_id: DataTypes.INTEGER,
        }, {
            sequelize,
            modelName: 'products',
            timestamps: false,
        });
    }

}

module.exports = Product
