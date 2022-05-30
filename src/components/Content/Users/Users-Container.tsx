import { connect } from "react-redux";
import {toggleFollow, requestUsers, follow, unfollow} from "../../../Redux/Reducers/users-reducer";
import React from "react";
import Users from "./Users";
// import Preloader from "../../Common/Preloader/Preloader";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalItemsCount, getUsers } from "../../../Redux/Reducers/users-selectors";
import Preloader from "../../Common/Preloader/Preloader";
import { UsersType } from "../../../Types/types";
import { AppStateType } from "../../../Redux/redux-store";

type MapStatePropsType = {
  users: Array<UsersType>
  pageSize: number
  currentPage: number
  totalItemsCount: number
  isFetching: boolean
  followingInProgress: Array<number>
}
type DispatchPropsType = {
  toggleFollow: (userId: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
}
type OwnPropsType = {}

type PropsType = MapStatePropsType & DispatchPropsType & OwnPropsType
class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (pageNumber: number) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    totalItemsCount: getTotalItemsCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(withAuthRedirect,
  connect<MapStatePropsType, DispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, 
    {toggleFollow, requestUsers, follow, unfollow}))(UsersContainer);
