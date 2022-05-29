import "./App.css";
import { Route, Routes } from "react-router-dom";
import SideBarContainer from "../components/SideBar/SideBar";
import UsersContainer from "../components/Content/Users/Users-Container";
import ProfileContainer from "../components/Content/Profile/Profile-Container";
import HeaderContainer from "../components/Header/Header-Container";
import LoginPageContainer from "../components/Login/Login";
import React from "react";
import { connect } from "react-redux";
import { initializeApp } from "../Redux/Reducers/app-reducer";
import Preloader from "../components/Common/Preloader/Preloader";
import DialogsContainer from "../components/Content/Dialogs/Dialogs-Container";

class App extends React.Component {

  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error occurred")
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }


  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <SideBarContainer />
        <div className="app-wrapper-content">
            <Routes>
              <Route path="/*" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/login/*" element={<LoginPageContainer />} />
            </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
