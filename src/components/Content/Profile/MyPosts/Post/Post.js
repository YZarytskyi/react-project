import React from "react";
import style from './Post.module.css'
import UserPhoto from '../../../../../assets/images/userPhoto.jpg'

const Post = (props) => {
  debugger
  return (
    <div className={style.post}>
        <img
          src={UserPhoto}
          alt=""
        />
        <span>{props.message}</span>
          <div>Like {props.likeCount}</div>
        </div>
  );
};

export default Post;
