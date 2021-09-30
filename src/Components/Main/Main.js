import React, { useEffect, useState } from "react";
import Foods from "./Foods/Foods";
import "./Main.css";

const Main = () => {
  const [inputText, setInputText] = useState("");
  const [searcheValue, setSearcheValue] = useState(inputText);

  const handleSearch = (event) => {
    setInputText(event.target.value);
  };
  const searchClick = () => {
    /*     if (!searcheValue) {
      alert("Please enter valid food name.");
      setInputText("");
      return;
    } */
    setSearcheValue(inputText);
    setInputText("");
  };
  return (
    <>
      <section>
        <div className="banner">
          <div className="w-10/12 md:w-1/3 mx-auto flex items-center py-5 h-48">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search your food"
              className="py-3 w-full px-2 focus:outline-none"
              value={inputText}
            />
            <button
              onClick={searchClick}
              className="py-3 px-3 bg-purple-700 rounded text-white font-semibold uppercase"
            >
              Search
            </button>
          </div>
        </div>
        <Foods searcheValue={searcheValue}></Foods>
      </section>
    </>
  );
};

export default Main;
