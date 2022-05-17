import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
    <div>
      <img
        id={style.avatar}
        src="https://static7.depositphotos.com/1008939/726/i/450/depositphotos_7264018-stock-photo-programmer.jpg"
        alt=""
      />
      </div>
      <div className={style.description}>
      Description
      </div>
    </div>
  );
}

export default ProfileInfo;
