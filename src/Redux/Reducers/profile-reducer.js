const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE"

let initialState = {
  posts: [
    { id: 1, message: "I like React", likeCount: 20 },
    { id: 2, message: "JavaScript is cool", likeCount: 15 },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {id: 3, message: state.newPostText, likeCount: 0,}],
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;
