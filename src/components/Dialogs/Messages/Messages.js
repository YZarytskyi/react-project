import Message from "./Message/Message";
import classes from "./Messages.module.css";

const Messages = (props) => {
  
  let messagesElements = props.messages.map((mes) => {
    return <Message message={mes.message} />;
  });
  
  return <div className={classes.messages}>{messagesElements}</div>;
};

export default Messages;
