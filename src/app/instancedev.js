import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/data",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

// todo blabla
export default api;
