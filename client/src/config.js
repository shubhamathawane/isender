import axios from "axios";
export const axiosInstance  = axios.create({
    baseURL : "https://bhejde.herokuapp.com/api/"
})