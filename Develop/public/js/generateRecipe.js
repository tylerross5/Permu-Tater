$(document).ready(function() {
    // Attach a click event listener to the "Generate Recipe" button
    $('#generateRecipeBtn').on('click', function() {
      // Make an AJAX request to the backend server
      $.ajax({
        url: '/recipes',
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
            <h4 style="text-align: center !important;">${data.strMeal}</h4> 
            <img style="display: block; margin-left: auto; margin-right: auto;" src="${data.strMealThumb}" alt="${data.strMeal}"> 
            <p style="text-align: center !important;">
              <span style="font-weight: bold;">Category: </span>${data.strCategory}
            </p>
            <p style="text-align: center !important;">
              <span style="font-weight: bold;">Area: </span>${data.strArea}
            </p>
            <h5 style="text-align: center !important; text-decoration: underline;">Instructions</h5>
            ${instructionsList}
            <h5 style="text-align: center !important; text-decoration: underline;">Ingredients</h5>
            <div style="display: block; margin-left: auto; margin-right: auto;"">
              ${ingredientsList} 
            </div>
            <p style="text-align: center !important;">Tags: ${data.strTags}</p>
            <p style="text-align: center !important;">YouTube Video: <a href="${data.strYoutube}" target="_blank">${data.strMeal}</a></p>
          `);
        }, 
        error: function(error) {
          console.error('Failed to fetch random recipe:', error);
        }
      });
    });
  });