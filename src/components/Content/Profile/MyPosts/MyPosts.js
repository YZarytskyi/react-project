import React from "react";
import { AddPostForm } from "../../../Common/Forms/AddPostForm/AddPostForm";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo(props => {
  let postsElements = [...props.posts].reverse().map((post) => (
    <Post message={post.message} likeCount={post.likeCount} key={post.id} id={post.id}
    profile={props.profile} removeLike={props.removeLike} addLike={props.addLike} posts={props.posts}
    />
  ));

  let addPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postBlock}>
      <h2>My posts</h2>
      <AddPostForm onSubmit={addPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
