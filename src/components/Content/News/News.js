import React from "react";
import MyPostsContainer from "../Profile/MyPosts/MyPosts-Container";

import style from "./News.module.css";

const News = (props) => {
  return (
    <div className={style.posts}>
    <MyPostsContainer />
    </div>
  );
};

export default News;
