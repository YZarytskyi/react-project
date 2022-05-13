import rerenderEntireTree from "../render";

export let state = {
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
};

export let addPost = () => {
  let newPost = { id: 3, message: state.profilePage.newPostText, likeCount: 0 };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = { id: 5, message: state.dialogsPage.newMessageText };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};
