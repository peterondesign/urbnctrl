import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://urbnctrl.onrender.com/api",
  // baseURL: "http://localhost:8000/api",
});

// Request interceptor to add the token to headers for each request
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('accessToken');
    const token = Cookies.get("urb-access-token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
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
