import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.239.136.180/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor untuk menambahkan JWT ke setiap request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
