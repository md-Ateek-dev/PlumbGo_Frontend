// // src/Services/axiosClient.js
// import axios from "axios";

// const Client = axios.create({
//   baseURL: "http://localhost:5000", // backend ka base URL
// });

// export default Client;
// src/Services/Client.js
import axios from "axios";

// Vite env se baseURL
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Client = axios.create({
  baseURL: API_BASE_URL,
});

Client.interceptors.request.use((config) => {
  const token = localStorage.getItem("plumbgo_user_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// agar token auto add karna ho to yahan interceptor bhi laga sakte ho (future me)
export default Client;
