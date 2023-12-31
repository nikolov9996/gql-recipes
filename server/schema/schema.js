import { createSchema } from "graphql-yoga";
import { typeDefs } from "./types.js";
import {
  findRecipeById,
  getManyRecipes,
  saveFile,
  createRecipe,
} from "./resolvers.js";

export const schema = createSchema({
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      getManyRecipes: getManyRecipes,
      findRecipeById: findRecipeById,
    },
    Mutation: {
      saveFile,
      createRecipe,
    },
  },
});
