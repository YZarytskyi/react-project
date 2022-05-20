import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../../Redux/Reducers/profile-reducer"
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

componentDidMount () {
  let userId = this.props.router.params.userId || 24009;
  this.props.getUserProfile(userId)
  this.props.getUserStatus(userId)
}

  render() {
  return (
      <Profile {...this.props} />
  );
}}

const mapStateToProps = (state) => {
  return{
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
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

export default compose(connect(mapStateToProps,{getUserProfile, getUserStatus, updateUserStatus}), 
withRouter, 
// withAuthRedirect
)(ProfileContainer)

