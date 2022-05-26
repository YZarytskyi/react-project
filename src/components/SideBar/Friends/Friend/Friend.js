import { NavLink } from "react-router-dom";
import style from "./Friend.module.css";
import UserPhoto from "../../../../assets/images/userPhoto.jpg"

const Friend = (props) => {
  return (
    <div className={style.friend}>
      <nav>
      <NavLink to="/dialogs" className={style.navLink}>
        <div>
          <img src={UserPhoto} alt="" />
        </div>
        <div>{props.name}</div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Friend;
