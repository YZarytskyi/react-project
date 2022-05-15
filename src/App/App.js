import "./App.css";
import Header from "../components/Header/Header";
import Profile from "../components/Content/Profile/Profile";
import Dialog from "../components/Content/Dialogs/Dialog";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialog />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
