import { connect } from "react-redux";
import { onMessageChangeActionCreator, sendMessageActionCreator } from "../../../../Redux/Reducers/dialogs-reducer";
import Messages from "./Messages";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {dispatch(onMessageChangeActionCreator(text))},
    sendMessage: () => {dispatch(sendMessageActionCreator())}
  }
}
 
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
