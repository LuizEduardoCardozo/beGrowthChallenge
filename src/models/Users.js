const { Model, DataTypes } = require('sequelize');

class User extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            local: DataTypes.STRING,
        }, {
            sequelize,
            modelName: 'users',
            timestamps: false,
        });
    }

}

module.exports = User