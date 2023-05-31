const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

Project.init(
  {
    id:{
    type: DataTypes.INTEGER,
    allowNull:false,
    autoIncrement: true,
    primaryKey:true,
    },
    name:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    description:{
      type:DataTypes.INTEGER
    },
    datecreated:{
      type:DataTypes.DATE,
      allowNull:false,
      default:DataTypes.NOW
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipes',
  },
  
  

);

module.exports = Recipes;
