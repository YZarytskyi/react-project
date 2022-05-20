import "./App.css";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import FindUsersContainer from "../components/Content/FindUsers/FindUsers-Container";
import ProfileContainer from "../components/Content/Profile/Profile-Container";
import HeaderContainer from "../components/Header/Header-Container";
import LoginPage from "../components/Login/Login";
import DialogsContainer from "../components/Content/Dialogs/Dialogs-Container";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <SideBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/*" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users/*" element={<FindUsersContainer />} />
          <Route path="/login/*" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
