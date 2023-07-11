const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config');

class User extends Model {
  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6]
    }
  },
  // the currency our website uses and that the user will have
  eldergold: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1000000
  },
  // array of items that the user owns
  /*item_id: {
    type: DataTypes.JSON,
    references: {
      model: 'user',
      key: 'id'
    }
  }*/
},
{
  hooks: {
    beforeCreate: async (data) => {
      data.password = await bcrypt.hash(data.password, 10);
      return data;
    },
    beforeUpdate: async (data) => {
      data.password = await bcrypt.hash(data.password, 10);
      return data;
    }
  },
  sequelize,
  freezeTableName: true,
  timestamps: false,
  modelName: 'user'
});

module.exports = User;