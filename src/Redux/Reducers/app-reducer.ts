import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

export type InitialStateType = {
  initialized: boolean,
}

let InitialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = InitialState, action: any): InitialStateType => {

  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

//ACTION CREATORS
const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });


//THUNK
export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSuccess());
  })

}

export default appReducer;
