import "./App.css";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Profile from "../components/Content/Profile/Profile";
import Dialog from "../components/Content/Dialogs/Dialog";
import { Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar state={props.state.dialogsPage} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs"
            element={
              <Dialog
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
