import axios from "axios";
import authHeader from "./auth-header";
import {API_URL_LOGIN} from "./auth.service"

const getPublicContent = () => {
    return axios.get (API_URL_LOGIN + "all");
};

const getUserBoard = () => {
    return axios.get (API_URL_LOGIN + "user", { headers: authHeader () });
};

export default {
    getPublicContent,
    getUserBoard,
};