import { NavLink } from "react-router-dom";
import classes from "./User.module.css";

const User = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <nav className={classes.user}>
      <div>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </nav>
  );
};

export default User;
