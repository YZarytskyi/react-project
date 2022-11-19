import Message from "./Message/Message";
import style from "./Messages.module.css";
import { SendMessageForm } from "../../../Common/Forms/SendMessageForm/SendMessageForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { sendMessage, startMessagesListening, stopMessagesListening } from "../../../../Redux/Reducers/chat-reducer";

const Messages = () => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  const messagesRef = useRef(null);

  useEffect(() => {
    dispatch(startMessagesListening());

    return () => {
      dispatch(stopMessagesListening())
    }
  }, []);

  useEffect(() => {
    messagesRef.current?.lastElementChild.scrollIntoView({behavior: "smooth", block: "end"})
  }, [messages]);

  const sendMessageHandler = ({ message }) => {
    dispatch(sendMessage(message))
  };

  if (messages.length) {
    const messagesElements = messages.map((mes, i) => {
      return <Message message={mes} key={i} />;
    });

    return (
      <div className={style.messagesContainer}>
        <div className={style.messages} ref={messagesRef}>{messagesElements}</div>
        <SendMessageForm onSubmit={sendMessageHandler} />
      </div>
    );
  }
};

export default Messages;
