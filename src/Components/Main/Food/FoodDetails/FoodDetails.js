import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link, useLocation } from "react-router-dom";
import "./FoodDetails.css";

const FoodDetails = () => {
  const [singleFood, setSingleFood] = useState({});
  const { foodId } = useParams();
  const location = useLocation();
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleFood(data.meals[0]))
      .catch((error) => console.log(console.log(error)));
  }, []);
  const { strMealThumb, strInstructions, strMeal, strYoutube, strCategory } =
    singleFood;
  console.log(singleFood);

  return (
    <>
      <section className="mx-12">
        <div className="flex justify-end mr-10">
          <Link to={`/foods`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 m-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
        <div className="my-5">
          <div className="h-96">
            <img className="h-full" src={strMealThumb} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold my-2">{strMeal}</h2>
            <small className="text font-semibold text-gray-500">
              {strCategory}
            </small>
            <p className="my-2">{strInstructions}</p>
          </div>
          <div className="receipe mb-6">
            <h2 className="text-3xl my-5 font-semibold">Receipe:</h2>
            <ol className="font-semibold text-lg">
              <li>{singleFood?.strIngredient1}</li>
              <li>{singleFood?.strIngredient2}</li>
              <li>{singleFood?.strIngredient3}</li>
              <li>{singleFood?.strIngredient4}</li>
              <li>{singleFood?.strIngredient5}</li>
              <li>{singleFood?.strIngredient6}</li>
              <li>{singleFood?.strIngredient7}</li>
              <li>{singleFood?.strIngredient8}</li>
              <li>{singleFood?.strIngredient9}</li>
              <li>{singleFood?.strIngredient10}</li>
              <li>{singleFood?.strIngredient11}</li>
              <li>{singleFood?.strIngredient12}</li>
              <li>{singleFood?.strIngredient13}</li>
              <li>{singleFood?.strIngredient14}</li>
              <li>{singleFood?.strIngredient15}</li>
              <li>{singleFood?.strIngredient16}</li>
              <li>{singleFood?.strIngredient17}</li>
              <li>{singleFood?.strIngredient18}</li>
              <li>{singleFood?.strIngredient19}</li>
              <li>{singleFood?.strIngredient20}</li>
            </ol>
          </div>
          <Link
            to={{ pathname: strYoutube }}
            target="_blank"
            className="border border-black py-2 px-3 inline-block bg-red-500 text-white font-semibold"
          >
            Watch Video
          </Link>
        </div>
      </section>
    </>
  );
};

export default FoodDetails;
