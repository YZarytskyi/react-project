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
    if(action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    }
    else if(action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if(action.type === 'SEND-MESSAGE') {
      let newMessage = { id: 5, message: this._state.dialogsPage.newMessageText };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    }
    else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};
