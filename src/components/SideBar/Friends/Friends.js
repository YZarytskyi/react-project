import style from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {

let friends = props.users.map(friend => {
  return (<Friend name={friend.name} key={friend.id} />)
})

  return (
    <div className={style.friends}>
      <h4 id={style.friendsH}>Friends</h4>
      <div id={style.table}>
        {friends}
      </div>
    </div>
  );
};

export default Friends;