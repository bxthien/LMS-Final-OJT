import axios from "axios";

const BASE_URL = "https://a161-113-160-225-96.ngrok-free.app";
axios.defaults.baseURL = BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

export default axiosInstance;
