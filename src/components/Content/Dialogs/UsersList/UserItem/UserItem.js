import { NavLink } from "react-router-dom";
import style from "./UserItem.module.css";

const UserItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <nav className={style.user}>
      <div>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </nav>
  );
};

export default UserItem;
