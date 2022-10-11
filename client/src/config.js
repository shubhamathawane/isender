import axios from "axios";
export const axiosInstance  = axios.create({
    baseURL : "https://isender.herokuapp.com/api/"
})