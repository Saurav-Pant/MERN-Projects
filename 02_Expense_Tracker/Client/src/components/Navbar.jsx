import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme";
import { motion } from "framer-motion";
import Profile from "./ProfileIcon";
import { useLocation } from "react-router-dom";
import { FiGithub } from "react-icons/fi";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  return (
    <>
      <div className="border-b-2 border-blue-500 transition-all hover:border-blue-600">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <h1
                className={
                  "text-3xl font-bold text-color-" +
                  theme.textColor +
                  " font-serif line-height-1.2 font-extrabold tracking-widest"
                }
              >
                Expense
                <br /> <span className="text-2xl pl-3">Tracker</span>
              </h1>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="mr-5 mt-2 hover:text-blue-500">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl drop-shadow-2xl"
              >
                <Link to="https://github.com/Saurav-Pant/Expense-Tracker" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </Link>
              </motion.button>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl drop-shadow-2xl"
                onClick={toggleTheme}
              >
                {theme.icon}
              </motion.button>
            </div>
            <div className="">
              {location.pathname === "/dashboard" ? (
                <div className="hover:text-blue-400 transition-all">
                  <Profile />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
