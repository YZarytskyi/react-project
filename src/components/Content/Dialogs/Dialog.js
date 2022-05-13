import classes from "./Dialog.module.css";
import Messages from "./Messages/Messages";
import Users from "./Users/Users";

const Dialog = (props) => {
  return (
    <div className={classes.dialog}>
      <Messages
        messages={props.dialogsPage.messages}
        newMessageText={props.dialogsPage.newMessageText}
        dispatch={props.dispatch}
      />
      <Users dialogs={props.dialogsPage.users} />
    </div>
  );
};

export default Dialog;
