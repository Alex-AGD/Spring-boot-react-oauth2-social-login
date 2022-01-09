import React, {useEffect, useRef, useState} from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {getCurrentUser, login} from "../../services/auth.service";
import {ACCESS_TOKEN, GITHUB_AUTH_URL, GOOGLE_AUTH_URL} from "../../constants";
import './Login.css';
import googleLogo from "../../img/google-logo.png";
import githubLogo from "../../img/github-logo.png";
import {Link} from "react-router-dom";

const required = (value) => {
    if (!value) {
        return (<div className="alert alert-danger" role="alert">
            Поле не может быть пустым!
        </div>);
    }
};

const LoginForm = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        getCurrentUser()
            .then(response => {
                setCurrentUser(response)
                setLoading(false)
                setAuthenticated(true)
            }).catch(e => {
            setLoading(false)
            console.log(e)
        });
    }, []);

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        const loginRequest = ({name: username, password: password});
        form.current.validateAll();
        login(loginRequest)
            .then(r => {
                localStorage.setItem(ACCESS_TOKEN, r.accessToken);
                setLoading(false)
            })
            .catch(error => {
                console.log("error")
                setLoading(false)
            });
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login to SpringSocial</h1>
                <div className="col-md-12">
                    <h1> Info about user: {currentUser != null ? currentUser.email &&
                        <div>Name: {currentUser.name}</div> : ''} </h1>
                    <Form onSubmit={handleLogin} ref={form}>
                        <div className="form-item">
                            <label htmlFor="username">Username</label>
                            <Input type="text"
                                   name="username"
                                   className="form-control"
                                   placeholder="Name"
                                   value={username}
                                   onChange={onChangeUsername}
                                   validations={[required]}
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password</label>
                            <Input type="password"
                                   name="password"
                                   className="form-control"
                                   placeholder="Password"
                                   value={password}
                                   onChange={onChangePassword}
                                   validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block"
                                    disabled={loading}>
                                {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                                <span>Login</span>
                            </button>
                        </div>
                        <CheckButton style={{display: "none"}} ref={checkBtn}/>

                    </Form>
                </div>
                <div className="social-login">
                    <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                        <img src={googleLogo} alt="Google"/> Log in with Google</a>
                    <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                        <img src={githubLogo} alt="Github"/> Log in with Github</a>
                </div>
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <span className="signup-link">New user?
                    <Link to="/signup">Sign up!</Link></span>
            </div>
        </div>
    );
};

export default LoginForm;