import { connect } from "react-redux";
import {setCurrentPage, toggleFollow, setTotalItemsCount,
  toggleIsFollowingProgress, requestUsers, follow, unfollow} from "../../../Redux/Reducers/users-reducer";
import React from "react";
import Users from "./Users";
// import Preloader from "../../Common/Preloader/Preloader";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollow, getFollowingInProgress, getIsFetching, getPageSize, gettotalItemsCount, getUnfollow, getUsers } from "../../../Redux/Reducers/users-selectors";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (page) => {
    this.props.requestUsers(page, this.props.pageSize)
  };

  render() {
    return (
      <>
        {/* {this.props.isFetching ? <Preloader /> : null} */}
        <Users
          totalItemsCount={this.props.totalItemsCount}
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    totalItemsCount: gettotalItemsCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    follow: getFollow(state),
    unfollow: getUnfollow(state),
  };
};

export default compose(withAuthRedirect,
  connect(mapStateToProps, { toggleFollow, setCurrentPage, setTotalItemsCount,
    toggleIsFollowingProgress, requestUsers, follow, unfollow}))(UsersContainer);
