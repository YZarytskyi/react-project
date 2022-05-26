import { authAPI } from "../../API/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_CAPTCHA = "SET-CAPTCHA"

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha,
      }
    default:
      return state;
  }
};

//ACTION CREATORS
const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha})

//THUNK
export const getAuthUserData = () => async (dispatch) => {
  let data = await authAPI.getAuth()
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (data, setError) => {
  const {email, password, rememberMe, captcha} = data
  return async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
        const {fieldsErrors, resultCode, messages} = data

        const setFieldsError = () => {
          if (fieldsErrors.length > 0) {
            for (let key in fieldsErrors) {
              let message = fieldsErrors[key].error
              setError(fieldsErrors[key].field, {type: 'server', message})
            }
          } else for (let key in messages) {
            let message = messages[key]
            setError('common', {type: 'server', message})
          }
        }
        switch (resultCode) {
          case 0:
            dispatch(getAuthUserData())
            break
          case 1:
            setFieldsError()
            break
          case 10:
            authAPI.getCaptcha()
              .then(data => {
                dispatch(setCaptcha(data.data.url))
              })
            setFieldsError()
            break
          default:
            throw Error('Auth Error')
        }
  }
}

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
}

export default authReducer;
