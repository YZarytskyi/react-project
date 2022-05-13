import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {

let friends = props.users.map(friend => {
  return (<Friend name={friend.name} />)
})

  return (
    <div className={classes.friends}>
      <h4>Friends</h4>
      <div>
        {friends}
      </div>
    </div>
  );
};

export default Friends;