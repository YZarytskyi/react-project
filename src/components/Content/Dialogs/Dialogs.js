import style from "./Dialog.module.css";
import MessagesContainer from "./Messages/Messages-Container";
import UsersContainer from "./Users/Users-Container";

const Dialogs = (props) => {

  return (
    <div className={style.dialog}>
      <MessagesContainer />
      <UsersContainer />
    </div>
  );
};

export default Dialogs;
