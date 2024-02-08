"use client";
import Link from "next/link";
// styles
import "./style.css";
// ===styles===

import Mode from "./change_mode/mode";

import Links from "./Links/Links";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [stress, setStress] = useState(false);
  const [clickMenu, setclickMenu] = useState("");
  const [chowMenu, setChowMenu] = useState("");

  function changMenu() {
    setStress(!stress);
  }

  function changClass() {
    setclickMenu("animitionMenu");
  }

  function chowNavbar() {
    return stress ? setChowMenu("") : setChowMenu("show");
  }

  return (
    <div className="container_nav">
      <div className="nav">
        <Link href="/">
          <div className="logo">Diba</div>
        </Link>

        <div className="navSrvice">
          {stress ? (
            <CloseIcon
              className={`menuicon  ${clickMenu}`}
              onClick={() => {
                changMenu(), changClass(), chowNavbar();
              }}
            />
          ) : (
            <MenuIcon
              className={`menuicon  ${clickMenu}`}
              onClick={() => {
                changMenu(), changClass(), chowNavbar();
              }}
            />
          )}

          <div className={`services ${chowMenu}`}>
            <Links Hide={setStress} updeteclass={setChowMenu} />
            <hr className="hrnav" />
            <Mode />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
