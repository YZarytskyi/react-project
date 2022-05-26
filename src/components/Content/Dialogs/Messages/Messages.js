import Message from "./Message/Message";
import style from "./Messages.module.css";
import React from "react";
import { SendMessageForm } from "../../../Common/Forms/SendMessageForm/SendMessageForm";

const Messages = (props) => {
  let messagesElements = props.dialogsPage.messages.map((mes) => {
    return <Message message={mes.message} />;
  });

  let sendMessage = (values) => {
    props.sendMessage(values.newMessageText)
  };

  return (
    <div>
      <div className={style.messages}>{messagesElements}</div>
        <SendMessageForm onSubmit={sendMessage}/>
    </div>
  );
};

export default Messages;
