import React, { useState, useEffect } from "react";
import Food from "../Food/Food";

const Foods = (props) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searcheValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error));
    return () => {
      isMounted = false;
    };
  }, [props.searcheValue]);

  return (
    <>
      <section className="grid grid-cols-4 gap-4 mx-12 my-5">
        {meals.map((item) => (
          <Food meals={item} key={item.idMeal}></Food>
        ))}
      </section>
    </>
  );
};

export default Foods;
