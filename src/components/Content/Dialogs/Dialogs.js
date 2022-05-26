import style from "./Dialog.module.css";
import MessagesContainer from "./Messages/Messages-Container";
import UsersListContainer from "./UsersList/UsersList-Container";

const Dialogs = (props) => {

  return (
    <div className={style.dialog}>
      <MessagesContainer />
      <UsersListContainer />
    </div>
  );
};

export default Dialogs;
