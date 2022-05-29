import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus, updateUserPhoto, addPost } from "../../../Redux/Reducers/profile-reducer"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

refreshProfile() {
  let userId = this.props.router.params.userId || this.props.authorizedUserId
  this.props.getUserProfile(userId)
  this.props.getUserStatus(userId)
}

componentDidMount () {
  this.refreshProfile();
}
componentDidUpdate (prevProps) {
  if(prevProps.router.params.userId !== this.props.router.params.userId) {
  this.refreshProfile();
  }
}

render() {
  return <Profile {...this.props} />
}}

const mapStateToProps = (state) => {
  return{
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
  }
}

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component {...props} router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}

export default compose(connect(mapStateToProps,{getUserProfile, getUserStatus, updateUserStatus, updateUserPhoto, addPost}), 
withRouter, 
withAuthRedirect
)(ProfileContainer)

