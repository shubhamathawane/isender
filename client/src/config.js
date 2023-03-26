import axios from "axios";
export const axiosInstance  = axios.create({
    baseURL : "https://sender.onrender.com"
})