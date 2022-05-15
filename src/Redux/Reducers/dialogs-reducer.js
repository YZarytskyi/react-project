const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text,})

export default dialogsReducer;
