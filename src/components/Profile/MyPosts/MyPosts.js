import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ((props) => {
  
  let postsElements = props.posts.map((post) => <Post message={post.message} likeCount={post.likeCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={classes.postBlock}> 
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
