import { WsMessage } from './../Types/types';
import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "94616667-97bb-410a-8c35-94af023121de",
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getUnfollow(userId: number) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  getFollow(userId: number) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },
  updateUserPhoto(img: any) {
    const formData = new FormData();
    formData.append("image", img);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
  Captcha = 10,
}
type GetAuthResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodeEnum;
  messages: Array<string>;
};
type LoginResponseType = {
  data: {
    userId: number;
  };
  resultCode: ResultCodeEnum;
  messages: Array<string>;
  fieldsErrors: Array<{ field: string; error: string }>;
};
type LogoutResponseType = {
  data: {};
  resultCode: ResultCodeEnum;
  messages: Array<string>;
};

export const authAPI = {
  getAuth() {
    return instance.get<GetAuthResponseType>("auth/me").then((res) => res.data);
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instance
      .post<LoginResponseType>("auth/login", {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance
      .delete<LogoutResponseType>("auth/login")
      .then((res) => res.data);
  },
  getCaptcha() {
    return instance.get<{ url: string }>("security/get-captcha-url");
  },
};