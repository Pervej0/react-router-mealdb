import React, { useState, useEffect } from "react";
import Food from "../Food/Food";
import NotFound from "../../NotFound/NotFound";

const Foods = (props) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searcheValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, [props.searcheValue]);

  return (
    <>
      <section>
        {!meals ? (
          <NotFound></NotFound>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid:cols-4 gap-4 mx-2 md:mx-12 my-5">
            {meals.map((item) => (
              <Food meals={item} key={item.idMeal}></Food>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Foods;
