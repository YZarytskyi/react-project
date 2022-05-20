import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

if (!props.profile) return <Preloader />

  return (
    <div className={style.profileInfo}>
    <div>
      <img
        id={style.avatar}
        src={props.profile.photos.large} alt=""
      />
    </div>
      <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
    </div>
  )
}

export default ProfileInfo;
