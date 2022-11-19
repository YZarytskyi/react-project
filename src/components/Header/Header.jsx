import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import Logo from "../../assets/images/logoo.png";

const Header = ({isAuth, login, logout}) => {
  return (
    <header className={style.header}>
      <span>
        <NavLink to="/profile">
          <img src={Logo} alt="" />
        </NavLink>
      </span>
      <span className={style.loginBlock}>
      {isAuth 
      ? <span className={style.login}>{login} <button onClick={logout}>Log out</button></span> 
      : <NavLink to="/login" className={style.logout}>LOGIN</NavLink>}
      </span>
    </header>
  );
}

export default Header;