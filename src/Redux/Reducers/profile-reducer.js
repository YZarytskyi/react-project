import { profileAPI } from "../../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const DELETE_POST = "DELETE-POST";
const SET_USER_PHOTO = "SET-USER-PHOTO";

let initialState = {
  posts: [
    { id: 1, message: "I like React", likeCount: 20 },
    { id: 2, message: "JavaScript is cool", likeCount: 15 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 3, message: action.newPostText, likeCount: 0,}],
      }
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }
    case SET_USER_STATUS:
      return {
        ...state, status: action.status
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.id)
      }
    case SET_USER_PHOTO:
      return {
        ...state, profile: {...state.profile, photos: action.img}
      }
    default:
      return state;
  }
};

//ACTION CREATOR
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const deletePost = (id) => ({  type: DELETE_POST, id })
const setUserPhoto = (img) => ({ type: SET_USER_PHOTO, img})

//THUNK
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}

export const updateUserPhoto = (file) => async (dispatch) => {
  let response = await profileAPI.updateUserPhoto(file)
  dispatch(setUserPhoto(response.data.data.photos))
}

export default profileReducer;
