import React from "react";
import classes from "./SideBar.module.css";
import {NavLink} from 'react-router-dom'
import Friends from "./Friends/Friends";

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
        <a>News</a>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
    </nav>
    <div>
      <Friends users={props.state.users}/>
    </div>
    </div>
  );
};

export default SideBar;
