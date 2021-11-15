import axios from "axios";

const API_URL_REGISTER = "http://localhost:8081/signup";
export const API_URL_LOGIN = "http://localhost:8081/login";


const register = (username, email, password) => {
    return axios.post (API_URL_REGISTER + "signup", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post (API_URL_LOGIN, {
            username,
            password,
        })
        .then ((response) => {
            if (response.data.accessToken) {
                localStorage.setItem ("user", JSON.stringify (response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};