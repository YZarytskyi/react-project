import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./AddPostForm.module.css";
import { addPostSchema } from "../../FormValidation/FormSchema";

export const AddPostForm = (props) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(addPostSchema),
  });
  const onSubmit = (data) => {
    props.onSubmit(data);
    reset();
  };
  return (
      <form onSubmit={handleSubmit(onSubmit)} className={style.addPost} >
        <textarea {...register("newPostText")} />
        <button type="submit">Add Post</button>
      </form>
  );
};
