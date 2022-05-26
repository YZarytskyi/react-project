import { connect } from "react-redux";
import Users from "./UsersList";


const mapStateToProps = (state) => {
  return {
    users: state.dialogsPage.users,
  }
}

const UsersListContainer = connect(mapStateToProps)(Users);

export default UsersListContainer;
