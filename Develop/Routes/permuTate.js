const express = require('express');
const app = express();

const { DataTypes } = require('sequelize'); // Our ORM
const sequelize = require('../config/connection'); // Connection to the Database
const Recipe = require('../models/Recipe'); // Connection to the recipe model

// Summoning and parsing the ingredient list
const ingredientsData = fs.readFileSync('path/to/ingredients.json', 'utf8');
const ingredients = JSON.parse(ingredientsData).Ingredients;
 
