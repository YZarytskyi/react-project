import React from "react";
import { AddPostForm } from "../../../Common/Forms/AddPostForm/AddPostForm";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo(props => {
  debugger
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} key={post.id} />
  ));

  let addPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <AddPostForm onSubmit={addPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
