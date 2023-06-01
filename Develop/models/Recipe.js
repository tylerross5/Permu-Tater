const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Recipe = sequelize.define('Recipe', {
  idMeal: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  strMeal: {
    type: DataTypes.STRING,
    allowNull: false
  },
  strCategory: {
    type: DataTypes.STRING,
    allowNull: false
  },
  strArea: {
    type: DataTypes.STRING,
    allowNull: false
  },
  strInstructions: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  strMealThumb: {
    type: DataTypes.STRING,
    allowNull: false
  },
  strTags: {
    type: DataTypes.STRING,
    allowNull: true
  },
  strYoutube: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredients: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  }
});

module.exports = Recipe;
