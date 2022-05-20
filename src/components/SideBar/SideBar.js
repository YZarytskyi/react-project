import React from "react";
import style from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/profile" className={(navData) => navData.isActive ? style.active : style.item}>
          <div className={style.items}>
            <span>
            <img src={Profile} alt="" />
            </span>
            <span>Profile</span>
            </div>
          </NavLink>

        <NavLink to="/users" className={(navData) => navData.isActive ? style.active : style.item}>
         <div className={style.items}>
          <span>
          <img src={Users} alt="" />
          </span>
            <span>Users</span>
         </div>
        </NavLink>

        <NavLink to="/dialogs" className={(navData) => navData.isActive ? style.active : style.item}>
         <div className={style.items}>
          <span>
            <img src={Message} alt="" />
          </span>
          <span>Messages</span>
         </div>
        </NavLink>

        <NavLink to="/news" className={(navData) => navData.isActive ? style.active : style.item}>
         <div className={style.items}>
          <span>
            <img src={News} alt="" />
          </span>
          <span>News</span>
         </div>
        </NavLink>

        <NavLink to="/music" className={(navData) => navData.isActive ? style.active : style.item}>
         <div className={style.items}>
          <span>
            <img src={Music} alt="" />
          </span>
          <span>Music</span>
         </div>
        </NavLink>

      </nav>
      <div>
        <FriendsContainer />
      </div>
    </div>
  );
};

export default SideBar;
