const router = require('express');
const app=express();

const recipeRoute= require('./recipeRoute');
const userRoutes= require('./userRoutes');

app.use(recipeRoute);
app.use(userRoutes);

router.use('/', homepageRoutes);
router.use('/', recipeRoute); //button should hit /recipe
router.use('/user', userRoutes);

module.exports = router;
module.exports = app;
