import RecipeModel from "../models/recipeModel.js";
import fs from "fs";
import path from "path";
import * as url from "url";
import { v4 as uuidv4 } from "uuid";
import { uploadImage } from "../services/cloudinary.js";
import { deleteAllFilesInDir } from "../services/fileOperations.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const findRecipeById = async (_, { id }) => {
  return await RecipeModel.findById(id);
};

export const getManyRecipes = async (_, { count }) => {
  return await RecipeModel.find({}).limit(count);
};

export const createRecipe = async (
  _,
  { name, prepTime, cookTime, ingredients }
) => {
  try {
    const tempRecipe = RecipeModel.create({
      name,
      prepTime,
      cookTime,
      ingredients,
    });

    return await (await tempRecipe).save();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Recipe Created");
  }
};

export const saveFile = async (_, { files }) => {
  try {
    const tempFilesPath = __dirname + "../tempFiles";
    if (!files?.length) return true;

    const promises = files.map(async (file, index) => {
      const fileArrayBuffer = await file.arrayBuffer();
      const newFilename = uuidv4() + ".jpg";

      await fs.promises.writeFile(
        path.join(tempFilesPath, newFilename),
        Buffer.from(fileArrayBuffer)
      );
      return newFilename;
    });

    const filesNames = await Promise.all(promises);

    const uploadResults = filesNames.map((fn) => {
      return uploadImage("./tempFiles/" + fn);
    });

    console.log(await Promise.all(uploadResults));

    await deleteAllFilesInDir("./tempFiles");
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
};
