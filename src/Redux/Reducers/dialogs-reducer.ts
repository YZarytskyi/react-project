const SEND_MESSAGE = "SEND-MESSAGE";

type MessagesType = {
  id: number
  message: string
}
type UsersType = {
  id: number
  name: string
}
let initialState = {
  messages: [
    { id: 1, message: "Hello, how are you" },
    { id: 2, message: "Ok" },
    { id: 3, message: "I like it" },
    { id: 4, message: "What's time is it now?" },
  ] as Array<MessagesType>,
  users: [
    { id: 1, name: "Dyma" },
    { id: 2, name: "Yura" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "Vova" },
  ] as Array<UsersType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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
type SendMessageActionType = {
  type: typeof SEND_MESSAGE
  newMessageText: string
}
export const sendMessageActionCreator = (newMessageText: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageText })

export default dialogsReducer;
