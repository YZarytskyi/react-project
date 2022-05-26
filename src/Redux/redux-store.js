import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./Reducers/auth-reducer";
import dialogsReducer from "./Reducers/dialogs-reducer";
import usersReducer from "./Reducers/users-reducer";
import profileReducer from "./Reducers/profile-reducer";
import sideBarReducer from "./Reducers/sideBar-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./Reducers/app-reducer";
import { composeWithDevTools } from '@redux-devtools/extension';


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
})

const composeEnhancers = composeWithDevTools;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

window.store = store

export default store;