import { connect } from "react-redux";
import { setCurrentPageAC, setUsersAC, toggleFollowAC, } from "../../../Redux/Reducers/findUsers-reducer";
// import { setTotalUsersCountAC } from "../../../Redux/Reducers/findUsers-reducer";
import FindUsers from "./FindUsers";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {dispatch(toggleFollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
    // setTotalUsersCount: (totalUsers) => {dispatch(setTotalUsersCountAC(totalUsers))},
  }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer;
