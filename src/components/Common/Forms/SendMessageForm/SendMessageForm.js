import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./SendMessageForm.module.css";
import { sendMessageSchema } from "../../FormValidation/FormSchema";

export const SendMessageForm = (props) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(sendMessageSchema),
  });
  const onSubmit = (data) => {
    props.onSubmit(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.sendMessage}>
      <textarea {...register("newMessageText")} />
      <button type="submit ">Send message</button>
    </form>
  );
};
