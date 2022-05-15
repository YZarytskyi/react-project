import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./Reducers/dialogs-reducer";
import profileReducer from "./Reducers/profile-reducer";
import sideBarReducer from "./Reducers/sideBar-reducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
})

let store =  createStore(reducers);

export default store;