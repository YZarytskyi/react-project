import style from "./Dialog.module.css";
import Messages from "./Messages/Messages";
import UsersListContainer from "./UsersList/UsersList-Container";

const Dialogs = () => {

  return (
    <div className={style.dialog}>
      <Messages />
    </div>
  );
};

export default Dialogs;
