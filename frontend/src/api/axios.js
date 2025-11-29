import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Backend URL
  withCredentials: true,                // allow cookies/token if used later
});

export default api;
