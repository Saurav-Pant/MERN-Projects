import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import { ThemeContext } from "./context/theme";
import Navbar from "./components/Navbar";

const App = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
