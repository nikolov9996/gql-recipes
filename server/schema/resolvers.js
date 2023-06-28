const RecipeModel = require("../models/recipeModel");

const findRecipeById = async (_, { id }) => {
  return await RecipeModel.findById(id);
};

const getManyRecipes = async (_, { count }) => {
  return await RecipeModel.find({}).limit(count);
};

module.exports = {
  findRecipeById,
  getManyRecipes,
};
