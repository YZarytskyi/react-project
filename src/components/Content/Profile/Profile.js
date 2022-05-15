import React from "react";
import MyPostsContainer from "./MyPosts/MyPosts-Container";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ((props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
})

export default Profile;
