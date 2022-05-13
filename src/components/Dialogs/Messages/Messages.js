import Message from "./Message/Message";
import classes from "./Messages.module.css";
import React from "react";

const Messages = (props) => {
  
  let messagesElements = props.messages.map((mes) => {
    return <Message message={mes.message} />;
  });

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.addMessage()   
  }
  
  let onMessageChange = () => {
    let text = newMessageElement.current.value
    props.updateNewMessageText(text)
  }

  return (
  <div>
  <div className={classes.messages}>
  {messagesElements}
  </div>
  <div>
  <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} />
  </div>
  <div>
    <button onClick={sendMessage}>Send</button>
  </div>
  </div>
)};

export default Messages;
