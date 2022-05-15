import React from "react";
import classes from "./SideBar.module.css";
import {NavLink} from 'react-router-dom'
import FriendsContainer from "./Friends/Friends-Container";

const SideBar = (props) => {
  return (
    <div className={classes.sidebar}>
    <nav>
      <div className={classes.item}>
        <NavLink to="/profile" className={ navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={ navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" className={ navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
      </div>
      <div className={classes.item}>
      <NavLink to="/music" className={ navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
      </div>
    </nav>
    <div>
      <FriendsContainer />
    </div>
    </div>
  );
};

export default SideBar;
