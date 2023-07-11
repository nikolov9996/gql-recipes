import RecipeModel from "../models/recipeModel.js";

export const findRecipeById = async (_, { id }) => {
  return await RecipeModel.findById(id);
};

export const getManyRecipes = async (_, { count }) => {
  return await RecipeModel.find({}).limit(count);
};

export const saveFile = async (_, { files }) => {
  try {
    console.log(files);
    // const fileArrayBuffer = await files.arrayBuffer();
    // await fs.promises.writeFile(
    //   path.join(__dirname, file.name),
    //   Buffer.from(fileArrayBuffer)
    // );
  } catch (e) {
    return false;
  }
  return true;
};
