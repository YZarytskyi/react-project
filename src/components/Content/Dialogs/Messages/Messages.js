import Message from "./Message/Message";
import classes from "./Messages.module.css";
import React from "react";

const Messages = (props) => {

  let messagesElements = props.dialogsPage.messages.map((mes) => {
    return <Message message={mes.message} />;
  });

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };

  let sendMessage = () => {
    props.sendMessage();
  };

  return (
    <div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <textarea placeholder="Enter your message" onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
      </div>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
