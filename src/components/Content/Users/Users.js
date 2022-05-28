import style from "./Users.module.css";
import userPhoto from "../../../assets/images/userPhoto.jpg";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";

const Users = (props) => {
  return (
    <div className={style.findUsers}>
      {props.users.map(user => (
        <div key={user.id} className={style.user}>
          <div id={style.userPhoto}>
            <div>
            <NavLink to={/profile/ + user.id}>
              <img
                src={user.photos.small ? user.photos.small : userPhoto}
                alt=""
              />
              </NavLink>
            </div>
            <div>
              <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                user.followed
                ? 
                props.unfollow(user.id)
                : 
                props.follow(user.id)
                }}>
                {user.followed ? "Unfollow" : "Follow"}
              </button>
            </div>
          </div>
          <div id={style.userInfo}>
            <div>
              <div>{user.name}</div>
              <div>{user.status ? user.status : "I like React!"}</div>
            </div>
            <div>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
        <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} 
        onPageChange={props.onPageChange} currentPage={props.currentPage} />
    </div>
  );
};

export default Users;
