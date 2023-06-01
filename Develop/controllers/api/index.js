const express = require('express');
const axios = require('axios');
const Recipe = require('../models/Recipe');

const router = express.Router();

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

    // Store the ingredients in an array
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (recipe[ingredientKey]) {
        ingredients.push({
          ingredient: recipe[ingredientKey],
          measure: recipe[measureKey],
        });
      }
    }

    // Delete the previous recipe from the database
    await Recipe.destroy({ truncate: true });

    // Create a new recipe entry in the database
    await Recipe.create({
      idMeal,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      ingredients,
    });

    // Send the recipe data as the response
    res.json({
      idMeal,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      ingredients,
    });
  } catch (error) {
    console.error('Error retrieving random recipe data from the Free Meal API: ', error);
    res.status(500).json({ error: 'Failed to retrieve random recipe data' });
  }
});

module.exports = router;
