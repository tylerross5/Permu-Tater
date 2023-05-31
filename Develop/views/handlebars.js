<script>
  // Recipe data
  const recipeData = {
    title: "Delicious Recipe Title",
    instructions: [
    ],
    picture: "path/to/recipe-picture.jpg"
  };

  // Get the recipe template
  const recipeTemplate = document.getElementById("recipe-template").innerHTML;

  // Compile the template
  const compiledTemplate = Handlebars.compile(recipeTemplate);

  // Generate the HTML using the compiled template and data
  const recipeHTML = compiledTemplate(recipeData);

  // Display the recipe in the response box
  const responseBox = document.getElementById("recipe-response-box");
  responseBox.innerHTML = recipeHTML;
</script>