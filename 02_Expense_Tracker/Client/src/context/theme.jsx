import React, { createContext, useState, useEffect } from "react"

const ThemeContext = createContext("light")

const lightTheme = {
  mode: "light",
  background: "#F8F9FA", // Light gray
  color: "#333333", // Dark gray
  icon: "☀️",
  button: {
    buttonBgColor: "#6B46C1", // Purple
    buttonTextColor: "#FFFFFF", // White
  },
  navbar: {
    background: "#FFFFFF", // White
    color: "#333333", // Dark gray
  },
};
const darkTheme = {
  mode: "dark",
  background: "#000000", // Black
  color: "#FFFFFF", // White
  icon: "🌜",
  button: {
    buttonBgColor: "#D97706", // Dark orange
    buttonTextColor: "#FFFFFF", // White
  },
  navbar: {
    background: "#4B5563", // Dark gray
    color: "#FFFFFF", // White
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme
    setTheme(newTheme)
    localStorage.setItem("selectedTheme", JSON.stringify(newTheme))
  }

  // Retrieve theme from local storage, if available
  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("selectedTheme"))
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeProvider, ThemeContext }
