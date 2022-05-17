import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

if (!props.profile) return <Preloader />

  return (
    <div>
    <div>
      <img
        id={style.avatar}
        src={props.profile.photos.large} alt=""
      />
      </div>
      <div className={style.description}>
      {props.profile.aboutMe}
      </div>
    </div>
  );
}

export default ProfileInfo;
