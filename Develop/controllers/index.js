const express = require('express');
const app=express();

const recipeRoute= require('./recipeRoute');
const userRoutes= require('./userRoutes');

app.use(recipeRoute);
app.use(userRoutes);

module.exports = app;
