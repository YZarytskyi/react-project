import { connect } from "react-redux";
import UsersList from "./UsersList";


const mapStateToProps = (state) => {
  return {
    users: state.dialogsPage.users,
  }
}

const UsersListContainer = connect(mapStateToProps)(UsersList);

export default UsersListContainer;
