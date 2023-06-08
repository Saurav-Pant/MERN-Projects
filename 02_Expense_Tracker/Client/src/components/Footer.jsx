import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center min-h-[8vh] items-center border-t-2 border-blue-500">
      <div>
        <p className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
          &copy; 2023 Expense Tracker
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
