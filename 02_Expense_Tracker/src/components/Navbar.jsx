import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { navbar } = theme;
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 shadow-lg"
        style={{
          background: navbar.background,
          color: navbar.color,
        }}
      >
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
          <div>
            <button className="text-3xl drop-shadow-2xl" onClick={toggleTheme}>
              {theme.icon}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
