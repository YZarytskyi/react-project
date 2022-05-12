import classes from "./Dialog.module.css";
import Messages from "./Messages/Messages";
import Users from "./Users/Users";


const Dialog = (props) => {
  return (
    <div className={classes.dialog}>
  <Messages messages={props.messages}/>
  <Users dialogs={props.dialogs}/>
    </div>
  );
}

export default Dialog;
