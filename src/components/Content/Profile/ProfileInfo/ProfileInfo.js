import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import UserPhoto from "../../../../assets/images/userPhoto.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;

  const onMainPhotoSelected = (e) => {
    if(e.target.files[0]) props.updateUserPhoto(e.target.files[0])
  }
  return (
    <div className={style.profileInfo}>
      <div>
        <img
          className={style.avatar}
          src={props.profile.photos.large || UserPhoto}
          alt=""
        />
        {props.profile.userId === props.authorizedUserId 
        && <input type={"file"} className={style.file} onChange={onMainPhotoSelected} />
        }
      </div>
      <div>
        <div className={style.profileName}>{props.profile.fullName}</div>
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
        <hr />
      </div>
    </div>
  );
};

export default ProfileInfo;
