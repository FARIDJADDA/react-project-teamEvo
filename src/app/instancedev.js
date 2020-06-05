import axios from "axios";

const api = axios.create({
  baseURL: "data",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default api;
