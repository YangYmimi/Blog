import axios from 'axios';

const service = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000,
  withCredentials: true,
});

service.interceptors.response.use(
  async (response) => {
    console.log(response);
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
