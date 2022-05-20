import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

function Header(props) {
  return (
    <header className={style.header}>
      <div>
        <NavLink to="/profile">
          <img src="logoo.png" alt="" />
        </NavLink>
      </div>
      <div className={style.loginBlock}>
      {props.isAuth ? props.login : <NavLink to="/login">LOGIN</NavLink>}
      </div>
    </header>
  );
}

export default Header;