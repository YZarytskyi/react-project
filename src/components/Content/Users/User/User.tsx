import React from 'react';
import style from "../Users.module.css";
import { NavLink } from "react-router-dom";
import UserPhoto from "../../../../assets/images/userPhoto.jpg"

type PropsType = { 
  user: any
  followingInProgress: Array<number>
  key: number
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  toggleFollow: (userId: number) => void
}
const User: React.FC<PropsType> = ({user, unfollow, follow, followingInProgress,  ...props}) => {
  return (
    <>
        <div key={user.id} className={style.user}>
          <div className={style.userPhoto}>
            <div>
            <NavLink to={/profile/ + user.id}>
              <img
                src={user.photos.small ? user.photos.small : UserPhoto}
                alt=""
              />
              </NavLink>
            </div>
            <div>
              <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                user.followed
                ? 
                unfollow(user.id)
                : 
                follow(user.id)
                }}>
                {user.followed ? "Unfollow" : "Follow"}
              </button>
            </div>
          </div>
          <div className={style.userInfo}>
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
    </>
  );
};

export default User;
