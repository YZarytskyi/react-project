import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import style from "./LoginForm.module.css";
import { loginSchema } from "../../FormValidation/FormSchema";

export const LoginForm = (props) => {
  const { register, setError, handleSubmit, formState:{ errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema)});
  const onSubmit = data => {
    props.onSubmit(data, setError);
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
        <input {...register("email")} type="email" />
        <p>{errors.email?.message}</p>
        <input {...register("password")} type="password"/>
        <p>{errors.password?.message}</p>
        <p>{errors.common?.message}</p>
        <p>{errors.captcha?.message}</p>
        <input {...register("rememberMe")} type="checkbox"   /> remember me
        <button type="submit" >Log in</button>
      </form>
  );
}