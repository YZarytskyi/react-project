import "./App.css";
import Header from "../components/Header/Header";
import Dialog from "../components/Content/Dialogs/Dialog";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import FindUsersContainer from "../components/Content/FindUsers/FindUsers-Container";
import ProfileContainer from "../components/Content/Profile/Profile-Container";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<Dialog />} />
          <Route path="/users/*" element={<FindUsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
