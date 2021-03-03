import axios from 'axios';
import { BaseUrl } from './constants';

const client = (api, token = null) => {
  const defaultOptions = {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };

  return {
    get: (url, options = {}) => api.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) => api.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) => api.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => api.delete(url, { ...defaultOptions, ...options }),
  };
};

export const api = axios.create({
  baseURL: BaseUrl,
});

export const requestAxios = client(api, localStorage.getItem('ACCESS_TOKEN'));
