import React from "react";
import { Link } from "react-router-dom";

const Food = (props) => {
  const { strInstructions, strMeal, strMealThumb, idMeal } = props.meals;
  return (
    <>
      <div className="border border-purple-300 p-2 pb-5">
        <div>
          <img className="inline-block" src={strMealThumb} alt="" />
        </div>
        <h4 className="text-2xl font-medium my-2">{strMeal}</h4>
        <p className="mb-3">{strInstructions.slice(0, 100)}...</p>
        <Link
          to={`/food/${idMeal}`}
          className="py-2 px-3 bg-purple-700 rounded text-white font-medium uppercase"
        >
          Read More
        </Link>
      </div>
    </>
  );
};

export default Food;
