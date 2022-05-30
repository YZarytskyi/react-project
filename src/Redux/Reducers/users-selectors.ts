import { AppStateType } from './../redux-store';
// import { createSelector } from "reselect";

export const getUsers = (state: AppStateType) => {
  return state.usersPage.users
}

// Reselector (example)
// export const getUsersSuper = createSelector(getUsers, (users) => {
//   return users.filter(u => true)
// })

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}

export const getTotalItemsCount = (state: AppStateType) => {
  return state.usersPage.totalItemsCount
}

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress
}

