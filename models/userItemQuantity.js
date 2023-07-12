const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class UserItemQuantity extends Model {}

// the tags that will be used to find items
UserItemQuantity.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // keeps track of which user
    user_id: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    // keeps track of which item (within the user)
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'userItemQuantity'
});

module.exports = UserItemQuantity;