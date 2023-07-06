import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // useEffect(() => {
  //   // console.log("token", token);
  // }, [token]);

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const value = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
