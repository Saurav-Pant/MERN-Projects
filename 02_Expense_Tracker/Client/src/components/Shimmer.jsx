import React from "react";

const Shimmer = () => {
  return (
    <div
      className="rounded-lg shadow-xl p-4 mb-4 mr-4 relative w-56 h-40 bg-gradient-to-r from-gray-300 to-gray-400"
      style={{
        transition: "opacity 0.5s ease",
      }}
    >
      <div
        className="flex flex-col justify-between h-full"
        style={{
          transition: "opacity 0.5s ease",
        }}
      >
        <div className="flex justify-center items-center bg-gray-500 h-4 w-1/2 mb-4 rounded-lg mx-auto"></div>
        <div className="flex justify-center items-center bg-gray-500 h-4 w-1/2 mb-4 rounded-lg mx-auto"></div>
        <div className="flex justify-start items-end bg-gray-500 h-4 w-1/3 rounded-lg ml-auto"></div>
        <div className="flex justify-end items-end bg-gray-500 h-4 w-1/3 rounded-lg mr-auto"></div>
      </div>
    </div>
  );
};

export default Shimmer;
