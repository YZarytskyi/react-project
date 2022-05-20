import { connect } from "react-redux";
import {setCurrentPage, toggleFollow,
  toggleIsFollowingProgress, getUsers, follow, unfollow} from "../../../Redux/Reducers/findUsers-reducer";
import React from "react";
import FindUsers from "./FindUsers";
import Preloader from "../../Common/Preloader/Preloader";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

class FindUsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (page) => {
    this.props.getUsers(page, this.props.pageSize)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <FindUsers
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          toggleFollow={this.props.toggleFollow}
          onPageChange={this.onPageChange}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    follow: state.usersPage.follow,
    unfollow: state.usersPage.unfollow,

  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleFollow: (userId) => {dispatch(toggleFollowAC(userId))},
// Move mapDispatchToProps to connect more shortly

export default compose(connect(mapStateToProps, { toggleFollow, setCurrentPage,
  toggleIsFollowingProgress, getUsers, follow, unfollow}), 
  withAuthRedirect)(FindUsersContainer);
