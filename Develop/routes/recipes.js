const express = require('express');
const axios = require('axios');
const path = require('path');
const Recipe = require('../models/Recipe');
const sequelize = require('../config/connection');

const router = express.Router();

// Serve the landing page and user login
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Serve the recipe page
router.get('/recipe', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'recipe.html'));
});

router.get('/recipes', async (req, res) => {
  try {
    // Make a request to the Free Meal API and retrieve the random recipe data
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');

    // Parse the JSON response and extract the necessary information
    const recipe = response.data.meals[0];
    const {
      idMeal,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube
    } = recipe;

    // Extract the ingredients
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(recipe[`strIngredient${i}`]);
      }
    }

    // Create a new recipe object
    const newRecipe = {
      idMeal,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      ingredients: ingredients.join(', ') // Join the ingredients into a string
    };

    // Save the recipe to the MySQL database using Sequelize
    await Recipe.create(newRecipe);

    // Send the recipe data as the response
    res.json(newRecipe);
  } catch (error) {
    console.error('Error retrieving random recipe data from the Free Meal API: ', error);
    res.status(500).json({ error: 'Failed to retrieve random recipe data' });
  }
});

module.exports = router;
