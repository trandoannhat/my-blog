import axios from "axios";

const api = axios.create({
  baseURL: "https://api.nhatdev.top/api", // Đường dẫn API của bạn
});

export const getPosts = () => api.get("/Post");
export default api;
