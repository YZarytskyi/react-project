const SEND_MESSAGE = "SEND-MESSAGE";

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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 5, message: action.newMessageText,}]
      }
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText })

export default dialogsReducer;
