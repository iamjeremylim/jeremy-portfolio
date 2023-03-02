import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem("isDarkMode"));
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    localStorage.setItem("isDarkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
