import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "2a8d56a2-65da-4d68-8175-748919d8d9ca",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getUnfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  getFollow(userId) {
    return instance
      .post(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance
    .get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance
    .get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance
    .put(`profile/status`, {status: status})
  },
  updateUserPhoto(img) {
    const formData = new FormData();
    formData.append('image', img);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  } 
}

export const authAPI = {
  getAuth() {
    return instance
    .get('auth/me')
    .then((response) => response.data)
  },
  login(email, password, rememberMe = false) {
    return instance
    .post('auth/login', { email, password, rememberMe })
    .then(response => response.data)
  },
  logout() {
    return instance
    .delete('auth/login')
    .then(response => response.data)
  },
  getCaptcha() {
    return instance
    .get('security/get-captcha-url')
  }
}