import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar File

  type Recipe {
    name: String!
    id: ID
    prepTime: Int!
    cookTime: Int!
    rating: Int
    ingredients: [String]!
  }

  type Query {
    findRecipeById(id: ID): Recipe
    getManyRecipes(count: Int): [Recipe]
  }

  type Mutation {
    saveFile(files: [File]!): Boolean!
    createRecipe(
      name: String!
      prepTime: Int
      cookTime: Int
      ingredients: [String!]
    ): Recipe
  }
`;
