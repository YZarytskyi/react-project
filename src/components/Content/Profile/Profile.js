import React from "react";
import MyPostsContainer from "./MyPosts/MyPosts-Container";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ((props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo authorizedUserId={props.authorizedUserId} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} 
      updateUserPhoto={props.updateUserPhoto}/>
      <MyPostsContainer />
    </div>
  );
})

export default Profile;
