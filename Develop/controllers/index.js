const express = require('express');
const app=express();

const recipeRoute= require('./recipeRoute');
const userRoutes= require('./userRoutes');
const pullRecipeRoute = require('./themealdbRoute')

app.use(recipeRoute);
app.use(userRoutes);
app.use(pullRecipeRoute);

module.exports = app;
