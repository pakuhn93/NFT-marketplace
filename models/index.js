const User = require('./User.js');
const Category = require('./Category.js');
const Item = require('./Item.js');


Category.hasMany(Item, {
    foreignKey: 'category_id'
});

Item.belongsTo(Category, {
    foreignKey: 'category_id'
});

module.exports = { Category, User, Item };
