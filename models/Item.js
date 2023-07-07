const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Item extends Model {}

// our virtual items
Item.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id'
        }
    },
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'item'
});

module.exports = Item;