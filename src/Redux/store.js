import dialogsReducer from "./Reducers/dialogs-reducer";
import profileReducer from "./Reducers/profile-reducer";
import sideBarReducer from "./Reducers/sideBar-reducer";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "I like React", likeCount: 20 },
        { id: 2, message: "JavaScript is cool", likeCount: 15 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hello, how are you" },
        { id: 2, message: "Ok" },
        { id: 3, message: "I like it" },
        { id: 4, message: "What's time is it now?" },
      ],
      users: [
        { id: 1, name: "Dyma" },
        { id: 2, name: "Yura" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Vova" },
      ],
      newMessageText: "",
    },
    sideBar: {},
  },
  _callSubscriber() {
    console.log("a");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  }
};