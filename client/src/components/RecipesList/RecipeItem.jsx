import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReactStars from "react-rating-stars-component";

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative">
        <Link key={recipe.id} to={`/recipe/${recipe.id}`} className=" ">
          <img
            src={recipe.imageSrc || "/default.jpg"}
            alt="food should be here"
            className="h-60 w-full object-cover object-center group-hover:opacity-75"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center pr-2">
        <div>
          <h3 className="mt-2 text-sm text-gray-700">{recipe.name}</h3>
          <ReactStars
            value={recipe?.rating}
            count={5}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          ,
        </div>
        <div className="hover:cursor-pointer hover:opacity-50">
          <FavoriteBorderIcon fontSize="large" color="action" />
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
