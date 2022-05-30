import React from "react";
import style from "./Users.module.css";
import { UsersType } from "../../../Types/types";
import User from "./User/User"
import Paginator from "./Paginator";

type PropsType = { 
  totalItemsCount: number
  pageSize: number
  currentPage: number
  users: Array<UsersType>
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  toggleFollow: (userId: number) => void
  onPageChange: (pageNumber: number) => void
}
const Users: React.FC<PropsType> = ({users, ...props}) => {
  return (
    <div className={style.findUsers}>
      {users.map(user => <User user={user}
                               followingInProgress={props.followingInProgress}
                               key={user.id}
                               follow={props.follow}
                               unfollow={props.unfollow}
                               toggleFollow={props.toggleFollow}
                          />
      )}
      <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} 
        onPageChange={props.onPageChange} currentPage={props.currentPage} />
    </div>
  )
}

export default Users;
