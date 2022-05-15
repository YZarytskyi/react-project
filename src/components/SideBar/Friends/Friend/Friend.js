import { NavLink } from "react-router-dom";
import classes from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <nav>
      <NavLink to="/dialogs" className={classes.navLink}>
        <div>
          <img src="https://lmusic.kz/images/artist_cover/ava-max.jpg" alt="" />
        </div>
        <div>{props.name}</div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Friend;
