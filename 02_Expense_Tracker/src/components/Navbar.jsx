import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="absolute top-10 left-10 ">
        <Link to="/">
          <h1
            className={
              "text-2xl font-bold text-color-" +
              theme.textColor +
              " font-serif line-height-1.2 font-extrabold tracking-widest"
            }
          >
            Expense
            <br /> <span className="text-3xl">Tracker</span>
          </h1>
        </Link>
      </div>
      <button
        className="ml-3 text-3xl absolute top-10 right-10 drop-shadow-2xl "
        onClick={toggleTheme}
      >
        {theme.icon}
      </button>
    </>
  );
};

export default Header;
