import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MANY_RECIPES } from "queries/recipes";
import RecipeItem from "./RecipeItem";

const RecipesList = () => {
  const { data, loading, error } = useQuery(GET_MANY_RECIPES, {
    variables: { count: 3 },
  });

  if (error) {
    return <p className="text-red-600">Error Component Here</p>;
  }

  if (loading) {
    return <p className="text-blue-600">Loading... Component Here</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.getManyRecipes?.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesList;
