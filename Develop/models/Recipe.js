const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Recipes = sequelize.define('Recipes', {
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
    allowNull: true
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
    type: DataTypes.TEXT, 
    allowNull: true
  }
});

module.exports = Recipes;
