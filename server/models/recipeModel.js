import mongoose from "mongoose";
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
  comments: Array,
});

export default mongoose.model("Recipe", RecipeSchema);
