import React from "react";
import MyPostsContainer from "./MyPosts/MyPosts-Container";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ((props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
})

export default Profile;
