import { NavLink } from "react-router-dom";
import style from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={style.friend}>
      <nav>
      <NavLink to="/dialogs" className={style.navLink}>
        <div>
          <img src="http://icphs20152.b-cdn.net/wp-content/uploads/2021/02/Lea-Elui-Ginet.jpg" alt="" />
        </div>
        <div>{props.name}</div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Friend;
