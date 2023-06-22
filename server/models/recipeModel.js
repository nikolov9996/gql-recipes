const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    createdBy: String,
    name: String,
    cookTime: Number,
    prepTime: Number,
    ingredients: Array,
    favorites: Array,
    likes: Array,
    rating: Number,
    ratedBy: Array,
    comments: Array
});

module.exports = mongoose.model("Recipe", RecipeSchema);
