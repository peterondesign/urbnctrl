import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://urbnctrl.onrender.com/api',
});

// Request interceptor to add the token to headers for each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle token refresh or other logic
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle error responses, e.g., refresh token logic
    return Promise.reject(error);
  },
);

export default axiosInstance;
