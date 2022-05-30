import { ResultCodeEnum } from './../../API/api';
import { authAPI } from "../../API/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_CAPTCHA = "SET-CAPTCHA"

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captcha: null as string | null,
};

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {

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
type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean 
}
type SetAuthUserDataActionType = {
type: typeof SET_USER_DATA
payload: SetAuthUserDataActionPayloadType
}
const setAuthUserData = (userId: number | null, email: string | null, login: string | null, 
  isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type SetCaptchaActionType = {
type: typeof SET_CAPTCHA
captcha: string
}
const setCaptcha = (captcha: string): SetCaptchaActionType => ({type: SET_CAPTCHA, captcha})

//THUNK
export const getAuthUserData = () => async (dispatch: any) => {
  let data = await authAPI.getAuth()
    if (data.resultCode === ResultCodeEnum.Success) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
}

type LoginDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: any
}
export const login = (data: LoginDataType, setError: any) => {
  const {email, password, rememberMe, captcha} = data
  return async (dispatch: any) => {
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
          case ResultCodeEnum.Success:
            dispatch(getAuthUserData())
            break
          case ResultCodeEnum.Error:
            setFieldsError()
            break
          case ResultCodeEnum.Captcha:
            authAPI.getCaptcha()
              .then((data: any) => {
                dispatch(setCaptcha(data.data.url))
              })
            setFieldsError()
            break
          default:
            throw Error('Auth Error')
        }
  }
}

export const logout = () => (dispatch: any) => {
  authAPI.logout().then((data: any) => {
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
}

export default authReducer;
