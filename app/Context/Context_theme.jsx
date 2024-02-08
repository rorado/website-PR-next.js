"use client";
import { createContext, useState, useEffect } from "react";

export const ThmeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  const toggle = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("mode", newMode);
      return newMode;
    });
  };

  return (
    <ThmeContext.Provider value={{ toggle, mode }}>
      <div className={`theme theme-${mode}`}>{children}</div>
    </ThmeContext.Provider>
  );
};
