import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.post}>
        <img
          src="https://lastfm.freetls.fastly.net/i/u/770x0/488f54a23f117b517cfbe769ff55a413.jpg"
          alt=""
        />
        <span>{props.message}</span>
          <div>Like {props.likeCount}</div>
        </div>
  );
};

export default Post;
