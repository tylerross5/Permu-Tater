
/*
    Importing modules/dependencies
*/
const fs = require('fs');
const { DataTypes } = require('sequelize'); // Our ORM
const Recipe = require('../models/Recipe'); // Connection to the recipe model
  

// Summoning the ingredient list
const ingredientsData = fs.readFileSync('../db/ingredients.json', 'utf8');
const ingredients = JSON.parse(ingredientsData).Ingredients;
 


/*
    Ingredient replacement function
*/
function permuTate(recipe) {
     // Gets ingredients array from 
    // the recipe db object
    const dbIngredient = JSON.parse(recipe.ingredients);

    // Log, it's log, it's big, it's heavy, it's wood.
    console.log('Fetched Ingredients:', dbIngredient);

     // Ingredient replacement logic 
    // starts here
    const replacedIngredients = dbIngredient.map((dbIngredient) => {

          // Here we filter ingredients (ing)
         // of the same type as the 
        // database ingredients
        const ingsOfSameType = ingredients.filter((ingredient) => {
            return ingredient.ingType === dbIngredient.ingType;
        });

        if (ingsOfSameType.length > 0) {
            // random math for ing selection
            const randomIndex = Math.floor(Math.random() * ingsOfSameType.length);
            const randomIng = ingsOfSameType[randomIndex];
        
            return {
                name: randomIng.strIngredient,
                measurement: dbIngredient.measurement,
            };

        // Ingredient is unique/no alternatives
        } else {
            return{
                name: dbIngredient.name,
                measurement: dbIngredient.measurement
            };
        }
    });

    // Convert the replaced ingredients 
   // array back to the original format 
  // and assign it back to the recipe object
  recipe.ingredients = JSON.stringify(replacedIngredients.map((ingredient) => {
    return {
      name: ingredient.name,
      measurement: ingredient.measurement,
    };
  }));

  return recipe;
}