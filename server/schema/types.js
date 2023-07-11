export const typeDefs = `
 scalar File

   type Recipe {
    name: String
    id: ID
    prepTime: Int
    cookTime: Int
    rating: Int
    ingredients: [String]
  }

  type Query {
    findRecipeById(id: ID): Recipe
    getManyRecipes(count: Int): [Recipe]
  }

  type Mutation {
        saveFile(files:[File]!): Boolean!
  }
`;
