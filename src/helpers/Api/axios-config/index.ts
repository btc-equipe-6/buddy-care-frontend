import axios from "axios";
import { errorInterceptor, responseInterceptor } from "./interceptors";

const apiUrl = "http://localhost:3333";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.status === 401 && localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export default api;