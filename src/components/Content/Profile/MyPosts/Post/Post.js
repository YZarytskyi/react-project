import React from "react";
import style from './Post.module.css'
import UserPhoto from '../../../../../assets/images/userPhoto.jpg'
import Preloader from "../../../../Common/Preloader/Preloader";

const Post = (props) => {

  let likeToggle = (postId) => {
    if (props.posts[postId - 1].isLiked) props.removeLike(postId)
    else props.addLike(postId)
  }

  if (!props.profile) return <Preloader />;
  return (
    <div className={style.post}>
      <div className={style.photo}>
        <img
          src={props.profile.photos.large || UserPhoto }
          alt=""
          className={style.round}
        />
        </div>
        <div className={style.postContent}>
          <div className={style.fullName}>{props.profile.fullName}</div>
          <div>{props.message}</div>
          <hr/>
          <div className={style.like}>
          <button onClick={() => likeToggle(props.id)}>
          {props.posts[props.id - 1].isLiked ? 'Unlike' : 'Like'}
          </button> <span>{props.likeCount}</span>
          </div>
        </div>
        </div>
  );
};

export default Post;
