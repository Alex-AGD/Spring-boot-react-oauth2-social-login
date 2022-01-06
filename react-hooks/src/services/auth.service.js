import axios from "axios";
import {ACCESS_TOKEN, API_BASE_URL} from "../constants";

const API_URL_REGISTER = "http://localhost:8081/signup";
export const API_URL_LOGIN = "http://localhost:8081/auth/login";

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    if (localStorage.getItem('accessToken')) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

const register = (username, email, password) => {
    return axios.post (API_URL_REGISTER + "signup", {
        username,
        email,
        password,
    });
};


export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export async function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        await Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}


const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};