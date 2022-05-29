import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo(props => {
  let postsElements = [...props.posts].reverse().map((post) => (
    <Post message={post.message} likeCount={post.likeCount} key={post.id} id={post.id}
    profile={props.profile} removeLike={props.removeLike} addLike={props.addLike} posts={props.posts}
    />
  ));

  return (
      <div className={style.posts}>{postsElements}</div>
  );
});

export default MyPosts;
