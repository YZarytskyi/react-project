import classes from "./Dialog.module.css";
import MessagesContainer from "./Messages/Messages-Container";
import UsersContainer from "./Users/Users-Container";


const Dialog = (props) => {
  return (
    <div className={classes.dialog}>
      <MessagesContainer />
      <UsersContainer />
    </div>
  );
};

export default Dialog;
