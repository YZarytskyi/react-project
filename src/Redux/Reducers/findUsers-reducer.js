import { usersAPI } from "../../API/api";

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SHOW_MORE = "SHOW-MORE";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoURL:
    //     "https://media2.telemetr.me/file/media-tm/avatars/095e9358b3deb7d6d029e9790047c150.jpg",
    //   name: "Dyma",
    //   status: "I like React!",
    //   location: { country: "Ukraine", city: "Kyiv" },
    //   followed: false,
    // },
    // {
    //   id: 2,
    //   photoURL:
    //     "https://media2.telemetr.me/file/media-tm/avatars/095e9358b3deb7d6d029e9790047c150.jpg",
    //   name: "Yura",
    //   status: "Cool programmer",
    //   location: { country: "Ukraine", city: "Kyiv" },
    //   followed: false,
    // },
    // {
    //   id: 3,
    //   photoURL:
    //     "https://media2.telemetr.me/file/media-tm/avatars/095e9358b3deb7d6d029e9790047c150.jpg",
    //   name: "Andrey",
    //   status: "Footballer",
    //   location: { country: "Belarus", city: "Minsk" },
    //   followed: false,
    // },
    // {
    //   id: 4,
    //   photoURL:
    //     "https://media2.telemetr.me/file/media-tm/avatars/095e9358b3deb7d6d029e9790047c150.jpg",
    //   name: "Vova",
    //   status: "Love UK",
    //   location: { country: "UK", city: "London" },
    //   followed: false,
    // },
  ],
  pageSize: 5,
  totalUsersCount: 30,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const findUsersReducer = (state = initialState, action) => {
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
    case SHOW_MORE:
      return {};
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

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const showMore = () => ({ type: SHOW_MORE });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage,});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching,});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setCurrentPage(currentPage));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.getUnfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(toggleFollow(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
      usersAPI.getFollow(userId).then((data) => {
        if (data.resultCode === 0) {
          dispatch(toggleFollow(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId));
      });
    };
  };

export default findUsersReducer;
