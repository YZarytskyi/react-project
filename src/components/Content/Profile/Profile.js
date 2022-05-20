import React from "react";
import MyPostsContainer from "./MyPosts/MyPosts-Container";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ((props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer />
    </div>
  );
})

export default Profile;
