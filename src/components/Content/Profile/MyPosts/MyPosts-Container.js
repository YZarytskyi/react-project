import { connect } from "react-redux";
import { addPost, addLike, removeLike, getUserProfile } from "../../../../Redux/Reducers/profile-reducer";
import MyPosts from "./MyPosts";
import { withAuthRedirect } from "../../../../HOC/withAuthRedirect";
import { compose } from "redux";
import React from 'react';

class MyPostsContainer extends React.Component {

  componentDidMount () {
    let userId = this.props.authorizedUserId
    this.props.getUserProfile(userId)
  }

  render() {
    return <MyPosts {...this.props} />
  }}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
  }
}

export default compose(connect(mapStateToProps,{addPost, addLike, removeLike, getUserProfile}), 
withAuthRedirect
)(MyPostsContainer)