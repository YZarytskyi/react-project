import React from "react";
import style from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import Message from "../../assets/images/Message.png";
import Profile from "../../assets/images/Profile.png";
import News from "../../assets/images/News.png";
import Users from "../../assets/images/Users.png";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";

type MapStateToProps = {
  authorizedUserId: number | null;
}

const SideBar: React.FC<MapStateToProps> = ({authorizedUserId}) => {
  return (
    <div className={style.sidebar}>
      <nav>
          <NavLink to={`/profile/${authorizedUserId}`} className={(navData) => navData.isActive 
          ? style.active : style.item}>
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
      </nav>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => {
  return { authorizedUserId: state.auth.userId }
}

export default connect(mapStateToProps)(SideBar);
