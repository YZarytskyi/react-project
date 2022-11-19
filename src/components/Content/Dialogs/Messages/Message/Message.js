import style from "./Message.module.css";

const Message = ({ message }) => {

  return (
    <div className={style.message} >
      <div className={style.imgUserNameContainer}>
      <img src={message.photo} alt={message.userName} width={40} className={style.profileImg} />
      <span className={style.userName}>{message.userName}</span>
      </div>
      <p className={style.messageText}>{message.message}</p>
    </div>
  );
};

export default Message;
