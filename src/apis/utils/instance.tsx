import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BackEndUrl; // 나중에 환경변수로 바꾸기

const defaultApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

const authApi = axios.create({
  // 인증O
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8;',
  },
  // withCredentials: true,
});

authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  console.log(token);
  if (token) {
    console.log('토큰 존재');
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const defaultInstance = defaultApi;
export const authInstance = authApi;
