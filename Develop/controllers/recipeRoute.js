const express = require('express');
const axios = require('axios');
const path = require('path');
const Recipe = require('../models/Recipe');
const fs = require('fs');

const router = express.Router();

// Load ingredients data from ingredients.json
const ingredientsFilePath = path.join(__dirname, '..', 'db', 'ingredients.json');
const ingredientsData = fs.readFileSync(ingredientsFilePath, 'utf8');
const ingredients = JSON.parse(ingredientsData).Ingredients;


//---Ingredient replacement function---//
function permuTate(dbIngredients) {

  // Ingredient replacement logic 
  // starts here
  const replaceIngredients = dbIngredients.map((dbIng) => {

    // Here we filter ingredients
    // of the same type as the 
    // matching strIngredient string
    const matchingIngredients = ingredients.filter((ingredient) => {
      return ingredient.strIngredient === dbIng.name;
    });

    if (matchingIngredients.length > 0) {

      // Retreive ingType from matching ingredient
      const ingType = matchingIngredients[0].ingType;

      // Filter ingredients based on matching ingType
      const matchingTypeIngredients = ingredients.filter((ingredient) => {
        return ingredient.ingType === ingType;
      });

      if (matchingTypeIngredients.length > 0) {

        // random math for ing selection
        const randomIndex = Math.floor(Math.random() * matchingTypeIngredients.length);
        const randomIng = matchingTypeIngredients[randomIndex];

        return {
          name: randomIng.strIngredient,
          measurement: dbIng.measurement,
        };
      }

      // Ingredient is unique/no alternatives
    } else {
      return {
        name: dbIng.name,
        measurement: dbIng.measurement
      };
    }
  });

  return replaceIngredients;
}

// Serves landing page & user login
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Serves recipe page
router.get('/recipe', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'recipe.html'));
});

router.get('/recipes', async (req, res) => {
  try {
    // Make a request to the themealdb, retrieving random recipe data
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

    // Extract the ingredients and their measurements
    const recipeIngredients = [];
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        const ingredient = {
          name: recipe[`strIngredient${i}`],
          measurement: recipe[`strMeasure${i}`] || '' // Use an empty string if measurement is not provided
        };
        recipeIngredients.push(ingredient);
      }
    }

    // Replace ingredients with random alternatives
    const replacedIngredients = permuTate(recipeIngredients);

    // Create a new recipe object with the replaced ingredients
    const newRecipe = {
      idMeal,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      ingredients: JSON.stringify(replacedIngredients) // Convert ingredients array to a JSON string
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