const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: { 
      type: DataTypes.INTEGER,
    // requires input value
    allowNull: false,
    primaryKey: true,
    // increases id value by 1 everytime automatically.
    autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
