const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SHOW_MORE = "SHOW-MORE";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
// const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"


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
      // case SET_TOTAL_USERS_COUNT: 
      // return {
      //   ...state,
      //   totalUsersCount: action.count};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    default:
      return state;
  }
};

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const showMore = () => ({ type: SHOW_MORE });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
// export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching});

export default findUsersReducer;
