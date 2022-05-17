import style from "./FindUsers.module.css";
import userPhoto from "../../../assets/images/userPhoto.jpg";
import { NavLink } from "react-router-dom";

const FindUsers = (props) => {

  let pagesCount = Math.ceil(
    props.totalUsersCount / props.pageSize
  );

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.findUsers}>
      {props.users.map((user) => (
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
              <button
                onClick={() => {
                  props.toggleFollow(user.id);
                }}
              >
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
      <div className={style.pages}>
        {pages.map((page) => {
          return (
            <span
              className={
                props.currentPage === page
                  ? style.selectedPage
                  : style.pageCounter
              }
              onClick={() => {
                props.onPageChange(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FindUsers;
