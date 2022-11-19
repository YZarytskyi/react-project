import React from "react";
import style from "./Login.module.css";
import { connect } from "react-redux";
import { login, LoginDataType } from "../../Redux/Reducers/auth-reducer"
import { Navigate } from "react-router-dom";
import { LoginForm } from "../Common/Forms/LoginForm/LoginForm";
import { AppStateType } from "../../Redux/redux-store";

type MapStateToProps = {
  captcha: string | null;
  isAuth: boolean;
}

type MapDispatchToProps = {
  login: (data: LoginDataType, setError: any) => void;
}

const LoginPage: React.FC<MapStateToProps & MapDispatchToProps> = ({login, isAuth, captcha}) => {

const onSubmit = (data: LoginDataType, setError: any) => {
  login(data, setError)
}

if(isAuth) {
  return <Navigate to="/products" />
}
  return (
    <div className={style.login}>
      <h2>Log In</h2>
      <hr />
      <LoginForm onSubmit={onSubmit} captcha={captcha} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
})

export default connect(mapStateToProps,{login})(LoginPage);
