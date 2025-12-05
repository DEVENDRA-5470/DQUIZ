import axios from "axios";

const api = axios.create({
  baseURL: "http://52.15.78.46:32000/api", // Backend URL
  withCredentials: true,                // allow cookies/token if used later
});

export default api;
