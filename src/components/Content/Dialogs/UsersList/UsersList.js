import UserItem from "./UserItem/UserItem";
import style from "./UsersList.module.css";

const UsersList = (props) => {
  
  let dialogsElements = props.users.map((user) => {
    return (<UserItem name={user.name} id={user.id} key={user.id} />)
  });

  return <div className={style.users}>{dialogsElements}</div>;
};

export default UsersList;
