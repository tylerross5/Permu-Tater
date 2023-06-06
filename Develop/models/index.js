const User = require('./User');
const Project = require('./Recipe');

User.hasMany(Recipes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
  foreignKey:'user_id',
});

module.exports = { User, Project };