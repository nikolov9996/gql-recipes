const { gql } = require("apollo-server-express");

module.exports.typeDefs = gql`
  type Recipe {
    name: String
    id: ID
    prepTime: Int
    cookTime: Int
    rating: Int
  }
  type Query {
    findRecipeById(id: ID): Recipe
    getManyRecipes(count: Int): [Recipe]
  }
`;
