import { gql } from "@apollo/client";

export const GET_RECIPE_BY_ID = gql`
  query ($id: ID) {
    findRecipeById(id: $id) {
      id
      name
      ingredients
    }
  }
`;

export const GET_MANY_RECIPES = gql`
  query ($count: Int) {
    getManyRecipes(count: $count) {
      id
      name
      rating
    }
  }
`;
