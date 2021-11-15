import React, {Component} from 'react';
import './Login.css';
import {ACCESS_TOKEN, GITHUB_AUTH_URL, GOOGLE_AUTH_URL} from '../../constants';
import {login} from '../../util/APIUtils';
import {Link, Redirect} from 'react-router-dom'
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';
import Alert from 'react-s-alert';

class Login extends Component {
    componentDidMount() {

    }
    componentDidUpdate (prevProps, prevState, snapshot) {
        if( prevProps.authenticated !== this.props.authenticated ) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }}/>;
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login to SpringSocial</h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
            </div>
        );
    }
}



function SocialLogin () {
    return (
        <div className="social-login">
            <a className="btn btn-block social-btn google" href={ GOOGLE_AUTH_URL }>
                <img src={ googleLogo } alt="Google"/> Log in with Google</a>
            <a className="btn btn-block social-btn github" href={ GITHUB_AUTH_URL }>
                <img src={ githubLogo } alt="Github"/> Log in with Github</a>
        </div>
    );
}


    class LoginForm extends Component {
        constructor (props) {
            super (props);
            this.state = {
                name: '',
                password: ''
            };
            this.handleInputChange = this.handleInputChange.bind (this);
            this.handleSubmit = this.handleSubmit.bind (this);
        }

        handleInputChange (event) {
            const target = event.target;
            const inputName = target.name;
            const inputValue = target.value;

            this.setState ({
                [ inputName ]: inputValue
            });
        }

    handleSubmit(event) {
        event.preventDefault();
        const loginRequest = (this.state);
        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");
            this.props.history.push("/");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="text" name="name"
                        className="form-control" placeholder="Name"
                        value={this.state.name} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                </div>
            </form>                    
        );
    }
}

export default Login
