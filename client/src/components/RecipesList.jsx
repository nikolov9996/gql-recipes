import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MANY_RECIPES, GET_RECIPE_BY_ID } from "../queries/recipes";

const RecipesList = () => {
  const { data, loading, error } = useQuery(GET_MANY_RECIPES, {
    variables: { count: 3 },
  });
  console.log(data);
  return <div>RecipesList</div>;
};

export default RecipesList;
