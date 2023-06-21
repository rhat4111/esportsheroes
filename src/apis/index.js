import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

API.register = (data) => API.post("/user", { user: data });
API.updateUserDiscord = (data) => API.put("/update-discord", { user: data });
API.updateUserTwitter = (data) => API.put("/update-twitter", { user: data });
API.updateUserEmail = (data) => API.put("/update-email", { user: data });
API.verify = (data) => API.post("/verify", { token: data });
API.me = (data) => API.get("/user", { params: { wallet: data.wallet } });
API.getCountdown = () => API.get("/countdown");
API.addDiscordGuildMember = (data) => API.post("/add-member", { code: data });

export default API;
