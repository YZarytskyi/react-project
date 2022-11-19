import { AppStateType, InferActionsType } from './../redux-store';
import { UsersType } from './../../Types/types';
import { usersAPI } from "../../API/api";
import { ThunkAction } from 'redux-thunk';

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
    case 'TOGGLE_FOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          } else return u;
        }),
      };
    case 'SET_USERS':
      return { ...state, users: action.users };
    case 'SET_TOTAL_USERS_COUNT':
      return {
        ...state, totalItemsCount: action.totalItemsCount
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'TOGGLE_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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

type ActionsType = InferActionsType<typeof actions>

//ACTION CREATORS

export const actions = {
  toggleFollow: (userId: number) => ({ type: 'TOGGLE_FOLLOW', userId } as const),
  setUsers: (users: Array<UsersType>) => ({ type: 'SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage,} as const),
  setTotalItemsCount: (totalItemsCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalItemsCount} as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching,} as const),
  toggleIsFollowingProgress: (isFetching : boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId,
  } as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
      dispatch(actions.toggleIsFetching(true));
      dispatch(actions.setCurrentPage(page));
      let data = await usersAPI.getUsers(page, pageSize)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalItemsCount(data.totalCount));
    };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId));
    let data = await usersAPI.getUnfollow(userId)
      if (data.resultCode === 0) {
        dispatch(actions.toggleFollow(userId));
      }
      dispatch(actions.toggleIsFollowingProgress(false, userId));
  };
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId));
    let data = await usersAPI.getFollow(userId)
        if (data.resultCode === 0) {
          dispatch(actions.toggleFollow(userId));
        }
        dispatch(actions.toggleIsFollowingProgress(false, userId));
    };
  };

export default UsersReducer;
