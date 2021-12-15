import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1234/api",
});

api.interceptors.request.use((config) => {
  const json = localStorage.getItem("loggedInUser");
  const loggedInUser = JSON.parse(json || '""');

  if (loggedInUser.token) {
    config.headers = { Authorization: `Bearer ${loggedInUser.token}` };
  }

  console.log(loggedInUser);

  return config;
});

export default api;

