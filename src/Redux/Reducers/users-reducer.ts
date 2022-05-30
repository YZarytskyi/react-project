import { AppStateType } from './../redux-store';
import { UsersType } from './../../Types/types';
import { usersAPI } from "../../API/api";
import { ThunkAction } from 'redux-thunk';
// import { Dispatch } from 'redux';

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 5,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //Array of users id
};

type InitialStateType = typeof initialState

const UsersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          } else return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state, totalItemsCount: action.totalItemsCount
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

type ActionsType = ToggleFollowActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalItemsCountActionType | ToggleIsFetchingActionType | ToggleIsFollowingProgressActionType

//ACTION CREATORS

type ToggleFollowActionType = {
  type: typeof TOGGLE_FOLLOW
  userId: number
}
export const toggleFollow = (userId: number): ToggleFollowActionType => ({ type: TOGGLE_FOLLOW, userId });
type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({ type: SET_USERS, users });
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage,});
type SetTotalItemsCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalItemsCount: number
}
export const setTotalItemsCount = (totalItemsCount: number): SetTotalItemsCountActionType => ({ 
  type: SET_TOTAL_USERS_COUNT, totalItemsCount,});
type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching,});
type ToggleIsFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleIsFollowingProgress = (isFetching : boolean, userId: number): ToggleIsFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

//THUNKS

// type GetStateType = () => AppStateType
// type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(page));
      let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalItemsCount(data.totalCount));
    };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let data = await usersAPI.getUnfollow(userId)
      if (data.resultCode === 0) {
        dispatch(toggleFollow(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
  };
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let data = await usersAPI.getFollow(userId)
        if (data.resultCode === 0) {
          dispatch(toggleFollow(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId));
    };
  };

export default UsersReducer;
