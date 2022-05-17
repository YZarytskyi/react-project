import * as axios from "axios";
import React from "react";
import style from "./FindUsers.module.css";
import userPhoto from "../../../assets/images/userPhoto.jpg";

class FindUsers extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={style.findUsers}>
        {this.props.users.map((user) => (
          <div key={user.id} className={style.user}>
            <div id={style.userPhoto}>
              <div>
                <img
                  src={user.photos.small ? user.photos.small : userPhoto}
                  alt=""
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    this.props.toggleFollow(user.id);
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
                  this.props.currentPage === page
                    ? style.selectedPage
                    : style.pageCounter
                }
                onClick={() => {
                  this.onPageChange(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FindUsers;
