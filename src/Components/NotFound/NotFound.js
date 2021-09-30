import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center py-24">
        <h1 className="text-5xl text-red-500 font-semibold">
          No result found 😞
        </h1>
        <h2 className="text-3xl text-gray-500">404</h2>
      </div>
    </div>
  );
};

export default NotFound;
