import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./Reducers/auth-reducer";
import dialogsReducer from "./Reducers/dialogs-reducer";
import findUsersReducer from "./Reducers/findUsers-reducer";
import profileReducer from "./Reducers/profile-reducer";
import sideBarReducer from "./Reducers/sideBar-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: findUsersReducer,
  auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;