// import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersPage.users
}

// Reselector (example)
// export const getUsersSuper = createSelector(getUsers, (users) => {
//   return users.filter(u => true)
// })

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const gettotalItemsCount = (state) => {
  return state.usersPage.totalItemsCount
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress
}

export const getFollow = (state) => {
  return state.usersPage.follow
}

export const getUnfollow = (state) => {
  return state.usersPage.unfollow
}