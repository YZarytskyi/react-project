import { connect } from "react-redux";
import Users from "./Users";


const mapStateToProps = (state) => {
  return {
    users: state.dialogsPage.users,
  }
}

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;
