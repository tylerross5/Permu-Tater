DROP DATABASE IF EXISTS permutate_db;
CREATE DATABASE permutate_db;

USE permutate_db;

CREATE TABLE meals (
    idMeal INT PRIMARY KEY,
    strMeal VARCHAR(100),
    strDrinkAlternate VARCHAR(100),
    strCategory VARCHAR(100),
    strArea VARCHAR(100),
    strInstructions TEXT,
    strMealThumb VARCHAR(200),
    strTags VARCHAR(100),
    strIngredient1 VARCHAR(100),
    strIngredient2 VARCHAR(100),
    strIngredient3 VARCHAR(100),
    strIngredient4 VARCHAR(100),
    strIngredient5 VARCHAR(100),
    strIngredient6 VARCHAR(100),
    strIngredient7 VARCHAR(100),
    strIngredient8 VARCHAR(100),
    strIngredient9 VARCHAR(100),
    strIngredient10 VARCHAR(100),
    strIngredient11 VARCHAR(100),
    strIngredient12 VARCHAR(100),
    strIngredient13 VARCHAR(100),
    strIngredient14 VARCHAR(100),
    strIngredient15 VARCHAR(100),
    strIngredient16 VARCHAR(100),
    strIngredient17 VARCHAR(100),
    strIngredient18 VARCHAR(100),
    strIngredient19 VARCHAR(100),
    strIngredient20 VARCHAR(100),
    strMeasure1 VARCHAR(100),
    strMeasure2 VARCHAR(100),
    strMeasure3 VARCHAR(100),
    strMeasure4 VARCHAR(100),
    strMeasure5 VARCHAR(100),
    strMeasure6 VARCHAR(100),
    strMeasure7 VARCHAR(100),
    strMeasure8 VARCHAR(100),
    strMeasure9 VARCHAR(100),
    strMeasure10 VARCHAR(100),
    strMeasure11 VARCHAR(100),
    strMeasure12 VARCHAR(100),
    strMeasure13 VARCHAR(100),
    strMeasure14 VARCHAR(100),
    strMeasure15 VARCHAR(100),
    strMeasure16 VARCHAR(100),
    strMeasure17 VARCHAR(100),
    strMeasure18 VARCHAR(100),
    strMeasure19 VARCHAR(100),
    strMeasure20 VARCHAR(100),
    strSource VARCHAR(200),
    strImageSource VARCHAR(200),
    strCreativeCommonsConfirmed VARCHAR(10),
    dateModified VARCHAR(20)
);

CREATE TABLE ingredients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  meal_id INT,
  ingredient VARCHAR(100),
  measure VARCHAR(100),
  FOREIGN KEY (meal_id) REFERENCES meals(idMeal)
);

CREATE TABLE recipe_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  recipe_id INT,
  cuisine_type VARCHAR(100),
  dietary_restrictions VARCHAR(100),
  meal_type VARCHAR(100),
  FOREIGN KEY (recipe_id) REFERENCES meals(idMeal)
);

CREATE TABLE Recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idMeal INT,
  strMeal VARCHAR(100),
  strCategory VARCHAR(100),
  strArea VARCHAR(100),
  strInstructions TEXT,
  strMealThumb VARCHAR(200),
  strTags VARCHAR(100),
  strYoutube VARCHAR(200),
  ingredients TEXT,
  createdAt DATETIME,
  updatedAt DATETIME,
  FOREIGN KEY (idMeal) REFERENCES meals(idMeal)
);
