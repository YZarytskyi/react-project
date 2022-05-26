import { connect } from "react-redux";
import { sendMessageActionCreator } from "../../../../Redux/Reducers/dialogs-reducer";
import Messages from "./Messages";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {dispatch(sendMessageActionCreator(newMessageText))}
  }
}
 
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
