import axios from "axios";

const API_URL_REGISTER = "http://localhost:8081/signup";
export const API_URL_LOGIN = "http://localhost:8081/auth/login";

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    if (localStorage.getItem('accessToken')) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'))
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
        url: API_URL_REGISTER,
        method: 'POST',
        body: JSON.stringify(loginRequest)
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