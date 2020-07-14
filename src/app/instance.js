import axios from "axios";

const api = axios.create({
  baseURL: "https://europe-west3-team-evo-a891c.cloudfunctions.net/",
});

export default api;
