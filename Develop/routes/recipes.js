// Will handle API routes related to fetching and analyzing recipes.
const express = require('express');
const axios = require('axios');
const path = require('path'); 
const Recipe = require('../models/Recipe');

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

    // Send the recipe data as the response
    res.json({
      idMeal,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube
    });
  } catch (error) {
    console.error('Error retrieving random recipe data from the Free Meal API: ', error);
    res.status(500).json({ error: 'Failed to retrieve random recipe data' });
  }
});

module.exports = router;