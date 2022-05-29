import React from "react";
import { AddPostForm } from "../../Common/Forms/AddPostForm/AddPostForm";
import MyPostsContainer from "./MyPosts/MyPosts-Container";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  let addPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.profile}>
      <ProfileInfo
        authorizedUserId={props.authorizedUserId}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        updateUserPhoto={props.updateUserPhoto}
      />
      <h2>My posts</h2>
      <AddPostForm onSubmit={addPost} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
