import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  // Theme state
  const [YtTheme, setYtTheme] = useState({
    isDarkTheme: true,
  });

  const generalBackgroundDark = "#1f1f1f";
  const generalBackgroundLight = "#f9f9f9";

  document.body.style.backgroundColor = YtTheme.isDarkTheme
    ? generalBackgroundDark
    : generalBackgroundLight;

  return (
    <ThemeContext.Provider value={[YtTheme, setYtTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
