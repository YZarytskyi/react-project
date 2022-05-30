
import { ProfileType, PostsType, PhotosType } from './../../Types/types';
import { profileAPI } from "../../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const DELETE_POST = "DELETE-POST";
const SET_USER_PHOTO = "SET-USER-PHOTO";
const ADD_LIKE = "ADD-LIKE"
const REMOVE_LIKE = "REMOVE-LIKE"

let initialState = {
  posts: [
    { id: 1, message: "Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra, eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies. Interdum praesent ut penatibus fames eros ad consectetur sed.", likeCount: 224, isLiked: false },
    { id: 2, message: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.",
    likeCount: 159, isLiked: false },
    { id: 3, message: "Augue malesuada massa torquent diam tortor; porttitor dis massa. Habitasse nunc ad placerat; nte netus gravida a porttitor. Vel aliquet hendrerit efficitur facilisis fames lacinia porta per. Integer euismod aenean mi hendrerit in volutpat consequat tempus turpis. Bibendum massa ad tincidunt, platea montes ac arcu. Penatibus elit justo adipiscing magna vulputate leo per.",
    likeCount: 199, isLiked: false },
    { id: 4, message: "Ridiculus proin etiam justo vivamus dignissim suscipit maecenas. Gravida ornare interdum ex dui eu faucibus dictum dis blandit. Rhoncus habitasse suscipit felis massa, ultrices auctor. Laoreet magnis justo velit vulputate iaculis at pulvinar augue. Condimentum suspendisse habitasse metus cubilia curabitur non sem. Primis nam in nulla phasellus bibendum pretium.",
    likeCount: 189, isLiked: false },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: "",
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: state.posts[state.posts.length - 1].id + 1, 
          message: action.newPostText, likeCount: 0, isLiked: false}],
      }
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case SET_USER_STATUS:
      return {...state, status: action.status}
    case DELETE_POST:
      return {...state, posts: state.posts.filter(p => p.id !== action.id)}
    case SET_USER_PHOTO:
      return { ...state, profile: {...state.profile, photos: action.img} as ProfileType}
    case ADD_LIKE:
      return {
        ...state,
        posts: state.posts.map(
          post => post.id === action.postId
          ? {...post,
            likeCount: post.likeCount + 1,
            isLiked: true
          }
          : post
        )
      }
    case REMOVE_LIKE:
        return {
          ...state,
          posts: state.posts.map(
            post => post.id === action.postId
            ? {...post,
              likeCount: post.likeCount - 1,
              isLiked: false
            }
            : post
          )
        }
    default:
      return state;
  }
};

//ACTION CREATOR
type AddPostActionType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS
  status: string
}
const setUserStatus = (status: string): SetUserStatusActionType => ({ type: SET_USER_STATUS, status })

type DeletePostActionType = {
  type: typeof DELETE_POST
  id: number
}
export const deletePost = (id: number): DeletePostActionType => ({  type: DELETE_POST, id })

type SetUserPhotoActionType = {
  type: typeof SET_USER_PHOTO
  img: PhotosType
}
const setUserPhoto = (img: PhotosType): SetUserPhotoActionType => ({ type: SET_USER_PHOTO, img})

type AddLikeActionType = {
  type: typeof ADD_LIKE
  postId: number
}
export const addLike = (postId: number): AddLikeActionType => ({ type: ADD_LIKE, postId })

type RemoveLikeActionType = {
  type: typeof REMOVE_LIKE
  postId: number
}
export const removeLike = (postId: number): RemoveLikeActionType => ({ type: REMOVE_LIKE, postId })

//THUNK
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}

export const updateUserPhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.updateUserPhoto(file)
  dispatch(setUserPhoto(response.data.data.photos))
}

export default profileReducer;
