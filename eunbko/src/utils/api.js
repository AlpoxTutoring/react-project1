import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
});

// 요청 인터셉터
api.interceptors.request.use(
  async config => {
    //기본 localStorage 토큰 사용
    config.headers['Authorization'] = localStorage.token
      ? localStorage.token
      : '';
    return config;
  },
  error => {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  },
);

// 응답 인터셉터
api.interceptors.response.use(
  function (response) {
    const _token = localStorage.token;
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);
