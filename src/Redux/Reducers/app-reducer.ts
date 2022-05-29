import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action: any) => {

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

//ACTION CREATORS
const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });


//THUNK
export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSuccess());
  })

}

export default appReducer;
