import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { ThemeContext } from "./context/theme";
import Navbar from "./components/Navbar";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Create from "./components/Create";
import EditExpense from "./components/editExpense"; // Update the import statement
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { useLocation } from "react-router-dom";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      {location.pathname == "/" || location.pathname == "/dashboard" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/authentication" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route exact path="/editExpense/:id" element={<EditExpense />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
