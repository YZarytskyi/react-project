import classes from "./Friend.module.css";

const Friend = (props) => {
  return (
    <span className={classes.friend}>
      <span>
        <img src="https://lmusic.kz/images/artist_cover/ava-max.jpg" alt="" />
        <div>{props.name}</div>
      </span>
    </span>
  );
};

export default Friend;
