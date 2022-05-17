import { connect } from "react-redux";
import { setCurrentPage, setUsers, toggleFollow, toggleIsFetching, } from "../../../Redux/Reducers/findUsers-reducer";
// import { setTotalUsersCountAC } from "../../../Redux/Reducers/findUsers-reducer";
import * as axios from "axios";
import React from "react";
import FindUsers from "./FindUsers";
import Preloader from "../../Common/Preloader/Preloader";


class FindUsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
    <>
    {this.props.isFetching 
    ? <Preloader />
    : null}
    <FindUsers totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      users={this.props.users}
      currentPage={this.props.currentPage}
      toggleFollow={this.props.toggleFollow}
      onPageChange={this.onPageChange}
    />
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleFollow: (userId) => {dispatch(toggleFollowAC(userId))},
//     setUsers: (users) => {dispatch(setUsersAC(users))},
//     setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
//     // setTotalUsersCount: (totalUsers) => {dispatch(setTotalUsersCountAC(totalUsers))},
//     toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))},
//   }
// }
// Move mapDispatchToProps to connect more shortly 

export default connect(mapStateToProps, {toggleFollow, setUsers, setCurrentPage, 
  toggleIsFetching,}) (FindUsersContainer)
