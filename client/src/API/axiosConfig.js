import axios from 'axios';
import Cookies from 'js-cookie';

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const token = Cookies.get('token');

axiosConfig.interceptors.request.use(
  (config) => {
    if (token !== undefined && token !== '') {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosConfig;
