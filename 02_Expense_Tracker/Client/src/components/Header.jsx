import React from "react";
import { motion } from "framer-motion";
import Person from "../asset/Person.png";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-[1536px]  px-4 md:px-8 lg:px-20">
        <div className="mt-16 md:mt-0 md:h-screen 2xl:h-auto py-16 2xl:py-28 grid md:grid-cols-2 items-center">
          <div className="flex flex-col items-start gap-10">
            <h1 className="text-6xl lg:text-8xl font-black text-blue-400 hover:text-blue-500 transition-colors ">
              Expense Tracker
            </h1>
            <p className="text-base sm:text-base md:text-2xl opacity-60 dark:opacity-80 mb-2 md:mb-4">
              A website where you can keep track of your Expenses
              <br />
              contribute to open source in the same time.
            </p>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              {token ? (
                <Link to="/dashboard">
                  <button className="rounded-md bg-blue-500 hover:bg-blue-700 py-2 px-4 mx-8 text-white">
                    Dashboard
                  </button>
                </Link>
              ) : (
                <Link to="/signup">
                  <button className="rounded-md bg-blue-500 hover:bg-blue-700 py-2 px-4 mx-8 text-white">
                    Sign In
                  </button>
                </Link>
              )}
            </motion.div>
          </div>
          <div className="">
            <img src={Person} alt="header" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
