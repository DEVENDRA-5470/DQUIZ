import axios from "axios";

const api = axios.create({
  baseURL: "http://3.12.76.57:32000/api", // Backend URL
  withCredentials: true,                // allow cookies/token if used later
});

export default api;
