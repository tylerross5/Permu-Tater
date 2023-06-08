require('dotenv').config();

const sequelize = require('../config/connection');
const Recipe = require('../models/Recipe');

const seedData = [
    {
      idMeal: '52928',
      strMeal: 'BeaverTails',
      strCategory: 'Dessert',
      strArea: 'Canadian',
      strInstructions: '...',
      strMealThumb: '...',
      strTags: '...',
      strYoutube: '...'
    },
    {
      idMeal: '12345',
      strMeal: 'Pancakes',
      strCategory: 'Breakfast',
      strArea: 'International',
      strInstructions: '...',
      strMealThumb: '...',
      strTags: '...',
      strYoutube: '...'
    },
    {
      idMeal: '67890',
      strMeal: 'Spaghetti Bolognese',
      strCategory: 'Main Course',
      strArea: 'Italian',
      strInstructions: '...',
      strMealThumb: '...',
      strTags: '...',
      strYoutube: '...'
    }, 
  ]; 

const seedDatabase = async () => {
try {
    // Sync the models with the database
    await sequelize.sync({ force: true });

    // Insert the seed data into the database
    await Recipe.bulkCreate(seedData);

    console.log('Database seeded successfully');
} catch (error) {
    console.error('Error seeding the database: ', error);
} finally {
    // Close the database connection
    sequelize.close();
}
};

seedDatabase();
