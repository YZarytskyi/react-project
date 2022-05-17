import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./Reducers/dialogs-reducer";
import findUsersReducer from "./Reducers/findUsers-reducer";
import profileReducer from "./Reducers/profile-reducer";
import sideBarReducer from "./Reducers/sideBar-reducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: findUsersReducer,
})

let store = createStore(reducers);

window.store = store

export default store;