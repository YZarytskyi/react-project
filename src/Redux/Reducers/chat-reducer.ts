import { chatAPI } from "./../../API/chatApi";
import { WsMessage } from "../../Types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsType } from "./../redux-store";
import { Dispatch } from "redux";

const SET_MESSAGES = "SET-MESSAGES";

let initialState = {
  messages: [] as Array<WsMessage>,
};

export type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
};
type SetMessagesActionType = {
  type: typeof SET_MESSAGES;
  payload: Array<WsMessage>;
};

type ActionsType = InferActionsType<typeof actions>;

const actions = {
  setMessagesAC: (payload: Array<WsMessage>): SetMessagesActionType => ({
    type: SET_MESSAGES,
    payload,
  }),
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

let _newMessageHandler: ((messages: WsMessage[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (!_newMessageHandler) {
    _newMessageHandler = (messages) => {
      dispatch(actions.setMessagesAC(messages));
    };
  }
  return _newMessageHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.startChannel();
  chatAPI.subscribe(newMessageHandlerCreator(dispatch));
};

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.unsubscribe(newMessageHandlerCreator(dispatch));
  chatAPI.stop();
};

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatAPI.sendMessage(message);
};

export default chatReducer;
