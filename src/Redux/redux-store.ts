import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./Reducers/auth-reducer";
import usersReducer from "./Reducers/users-reducer";
import profileReducer from "./Reducers/profile-reducer";
import sideBarReducer from "./Reducers/sideBar-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./Reducers/app-reducer";
import chatReducer from "./Reducers/chat-reducer";
import { composeWithDevTools } from '@redux-devtools/extension';


let reducer = combineReducers({
  profilePage: profileReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  chat: chatReducer,
})

type ReducerType = typeof reducer
export type AppStateType = ReturnType<ReducerType>

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

const composeEnhancers = composeWithDevTools;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));
//@ts-ignore
window.store = store

export default store