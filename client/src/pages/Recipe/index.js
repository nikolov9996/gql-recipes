import { useQuery } from "@apollo/client";
import { GET_RECIPE_BY_ID } from "queries/recipes";
import React from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(GET_RECIPE_BY_ID, {
    variables: { id: id },
  });

  if (loading) {
    return <p>Loading here...</p>;
  }

  if (error) {
    return <p>Error here</p>;
  }

  return <div>{JSON.stringify(data.findRecipeById)}</div>;
};

export default Recipe;
