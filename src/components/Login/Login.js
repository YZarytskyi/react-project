import React from "react";
import style from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../../Redux/Reducers/auth-reducer"
import { Navigate } from "react-router-dom";
import { LoginForm } from "../Common/Forms/LoginForm/LoginForm";

const LoginPage = (props) => {

const onSubmit = (data, setError) => {
  props.login(data, setError)
}

if(props.isAuth) {
  return <Navigate to="/profile" />
}
  return (
    <div className={style.login}>
      <h2>Log In</h2>
      <hr />
      <LoginForm onSubmit={onSubmit} captcha={props.captcha} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
})

export default connect(mapStateToProps,{login})(LoginPage);
