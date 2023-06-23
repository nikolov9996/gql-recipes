import React from "react";
import RecipesList from "components/RecipesList/RecipesList";
const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-main">Recipes List!</h1>
      <RecipesList />
    </div>
  );
};

export default Home;
