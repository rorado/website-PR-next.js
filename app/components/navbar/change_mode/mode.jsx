// "use client";
import { useContext, useRef, useState, useEffect } from "react";
import styles from "./mod.module.css";
import "./mode.css";

const Mode = () => {
  // let storedMode;

  // if (typeof localStorage !== "undefined") {
  //   storedMode = localStorage.getItem("mode");
  // }
  // if (storedMode === null) {
  //   storedMode = "dark";
  // }

  const [mode, setMode] = useState("dark");
  console.log(mode);

  const changeModel = useRef();

  function modeTogle() {
    if (mode === "dark") {
      document.documentElement.style.setProperty("--bg", "#fff");
      document.documentElement.style.setProperty("--text", "#1d2030");
    } else if (mode === "light") {
      document.documentElement.style.setProperty("--bg", "#1d2030");
      document.documentElement.style.setProperty("--text", "#fff");
    }
  }
  // function reload_modeTogle() {
  //   if (mode === "dark") {
  //     document.documentElement.style.setProperty("--bg", "#1d2030");
  //     document.documentElement.style.setProperty("--text", "#fff");
  //   } else if (mode === "light") {
  //     document.documentElement.style.setProperty("--bg", "#fff");
  //     document.documentElement.style.setProperty("--text", "#1d2030");
  //   }
  // }

  function toggleMode() {
    console.log(mode);
    setMode(() => {
      const newMode = mode === "dark" ? "light" : "dark";
      localStorage.setItem("mode", newMode);
      return newMode;
    });
    modeTogle();
  }

  // useEffect(() => {
  //   reload_modeTogle();
  //   const storedMode = localStorage.getItem("mode");
  //   if (storedMode) {
  //     setMode(storedMode);
  //   }
  // }, []);

  return (
    <div className={styles.container} onClick={toggleMode} ref={changeModel}>
      <div>☀️</div>
      <div>🌚</div>
      <div className={mode}></div>
    </div>
  );
};
export default Mode;
