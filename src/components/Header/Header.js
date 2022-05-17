import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

function Header(props) {
  return (
    <header className={style.header}>
    <nav>
      <NavLink to="/profile">
        <img src="logoo.png" alt="" />
      </NavLink>
      </nav>
    </header>
  );
}

export default Header;
