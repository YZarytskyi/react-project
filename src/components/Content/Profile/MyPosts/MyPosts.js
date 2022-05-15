import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = ((props) => {
  
  let postsElements = props.posts.map((post) => <Post message={post.message} likeCount={post.likeCount} />);
  
  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text)
  }

  let addPost = () => {
    props.addPost()
  }

  return (
    <div className={classes.postBlock}> 
      <h3>My posts</h3>
      <div>
        <textarea placeholder="Enter your post" onChange={onPostChange} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
