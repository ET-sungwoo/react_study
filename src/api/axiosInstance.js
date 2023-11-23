import axios from 'axios';

const createAxiosInstance = (contentType) => {
  const config = {
    baseURL: 'http://127.0.0.1:3000/',
    // withCredentials: true,
    headers: {
      'Content-Type': contentType,
    },
  };

  const instance = axios.create(config);

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = createAxiosInstance('application/json');
