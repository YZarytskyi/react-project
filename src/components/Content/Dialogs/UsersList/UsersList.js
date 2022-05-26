import User from "./User/User";
import style from "./UsersList.module.css";

const Users = (props) => {
  
  let dialogsElements = props.users.map((user) => {
    return (<User name={user.name} id={user.id} key={user.id} />)
  });

  return <div className={style.users}>{dialogsElements}</div>;
};

export default Users;
