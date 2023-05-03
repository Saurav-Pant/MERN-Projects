import React,{ useContext } from "react";
import { ThemeContext } from "../context/theme";

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const { navbar } = theme;
  return (
    <div className="flex justify-center min-h-[8vh] items-center" style={{
        background: navbar.background,
          color: navbar.color,
    }}>
      <div>
        <p className="">&copy; 2023 Expense Tracker</p>
      </div>
    </div>
  );
};

export default Footer;
