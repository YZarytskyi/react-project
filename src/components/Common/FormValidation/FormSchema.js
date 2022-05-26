import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup.string()
      .required("Required"),
  password: yup.string()
      .min(5, "Must be longer than 5 characters")
      .required("Required")
});

export const addPostSchema = yup.object().shape({
    newPostText: yup.string()
        .required("Enter something"),
  });

export const sendMessageSchema = yup.object().shape({
    newMessageText: yup.string()
        .required("Enter something"),
  });