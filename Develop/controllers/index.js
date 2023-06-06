const router = require('express').Router();

const userRoutes = require('./userRoutes');
const homepageRoutes = require('./homepageRoutes');
const recipeRoute = require('./recipeRoute');


router.use('/', homepageRoutes);
router.use('/recipe', recipeRoute); //button should hit /recipe
router.use('/user', userRoutes);

module.exports = router;
