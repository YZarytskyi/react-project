import User from "./User/User";
import classes from "./Users.module.css";

const Users = (props) => {
  
  let dialogsElements = props.users.map((user) => {
    return (<User name={user.name} id={user.id} />)
  });

  return <div className={classes.users}>{dialogsElements}</div>;
};

export default Users;
