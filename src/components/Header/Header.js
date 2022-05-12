import React from "react";
import classes from './Header.module.css'

function Header(props) {
  return (
    <header className={classes.header}>
      <img src="logoo.png" alt="" />
    </header>
  );
}

export default Header;