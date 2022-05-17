import React from "react";
import style from "./SideBar.module.css";
import {NavLink} from 'react-router-dom';
import FriendsContainer from "./Friends/Friends-Container";
import Message from "../../assets/images/Message.png";
import Profile from "../../assets/images/Profile.png";
import Music from "../../assets/images/Music.png";
import News from "../../assets/images/News.png";
import Users from "../../assets/images/Users.png";

const SideBar = (props) => {
  return (
    <div className={style.sidebar}>
    <nav>
      <div className={style.item}>
      <div>
        <img src={Profile} alt="" />
      </div>
        <NavLink to="/profile" className={ navData => navData.isActive ? style.active : style.item }>Profile</NavLink>
      </div>
      <div className={style.item}>
      <div>
        <img src={Users} alt="" />
      </div>
        <NavLink to="/users" className={ navData => navData.isActive ? style.active : style.item }>Users 
        </NavLink>
      </div>
      <div className={style.item}>
      <div>
        <img src={Message} alt="" />
      </div>
        <NavLink to="/dialogs" className={ navData => navData.isActive ? style.active : style.item }>Messages</NavLink>
      </div>
      <div className={style.item}>
      <div>
        <img src={News} alt="" />
      </div>
        <NavLink to="/news" className={ navData => navData.isActive ? style.active : style.item }>News</NavLink>
      </div>
      <div className={style.item}>
      <div>
        <img src={Music} alt="" />
      </div>
      <NavLink to="/music" className={ navData => navData.isActive ? style.active : style.item }>Music</NavLink>
      </div>
    </nav>
    <div>
      <FriendsContainer />
    </div>
    </div>
  );
};

export default SideBar;
