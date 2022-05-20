import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../API/api";
import style from "./Header.module.css";

function HeaderHOOK(props) {
  let [auth, setLogin] = useState({
    userId: null,
    email: null,
    login: null,
    isAuth: false,
  });

 useEffect(() => {
   if(auth.isAuth) {
        usersAPI.getAuth().then((data) => {
        if (data.resultCode === 0) {
          setLogin({userId: data.data.id,
            email: data.data.email,
            login: data.data.login,
            isAuth: true})
        }
      });
    }
  }, [auth.isAuth]);

  return (
    <header className={style.header}>
      <div>
        <NavLink to="/profile">
          <img src="logoo.png" alt="" />
        </NavLink>
      </div>
      <div className={style.loginBlock}>
        {auth.isAuth
        ? <button onClick={() => setLogin((auth) => ({...auth, isAuth: false}))}>Log out</button>
        : ''}

        {auth.isAuth
        ? auth.login 
        : <button onClick={() => setLogin((auth) => ({...auth, isAuth: true}))}>Log in</button>}
      </div>
    </header>
  );
}

export default HeaderHOOK;