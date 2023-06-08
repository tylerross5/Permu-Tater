$(document).ready(function() {
    // Attach a click event listener to the "Generate Recipe" button
    $('#generateRecipeBtn').on('click', function() {
      // Make an AJAX request to the backend server
      $.ajax({
        url: '/themealdb',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          // Handle the response data and update the HTML content
          let ingredientsList = '<ul>';
          const ingredients = JSON.parse(data.ingredients);
          ingredients.forEach(function(ingredient) {
            const { name, measurement } = ingredient;
            ingredientsList += `<li>${measurement} - ${name}</li>`;
          });
          ingredientsList += '</ul>';

          let instructionsList = '<ol>';
          const instructions = data.strInstructions.split(/\r\n|\n/);
          instructions.forEach(function(instruction) {
            // Trim any leading or trailing whitespace
            instruction = instruction.trim();
            if (instruction !== '') {
              instructionsList += `<li>${instruction}</li>`;
            }
          });
          instructionsList += '</ol>';

          $('#recipeContainer').html(`
            <h2>${data.strMeal}</h2> 
            <img src="${data.strMealThumb}" alt="${data.strMeal}"> 
            <p>Category: ${data.strCategory}</p>
            <p>Area: ${data.strArea}</p>
            <h3>Instructions:</h3>
            ${instructionsList}
            <h3>Ingredients:</h3>
            ${ingredientsList} 
            <p>Tags: ${data.strTags}</p>
            <p>YouTube Video: <a href="${data.strYoutube}" target="_blank">${data.strMeal}</a></p>
          `);
        }, 
        error: function(error) {
          console.error('Failed to fetch random recipe:', error);
        }
      });
    });
  });