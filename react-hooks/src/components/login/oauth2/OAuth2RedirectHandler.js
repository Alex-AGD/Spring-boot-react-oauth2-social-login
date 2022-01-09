import React from 'react';
import {Navigate} from "react-router-dom";
import {ACCESS_TOKEN} from "../../../constants";


function OAuth2RedirectHandlerHook(props) {
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        return (
            <div>
                <Navigate to={{
                    pathname: "/login",
                    state: {from: window.location}
                }}/>
            </div>
        );
    } else {
        return (
            <div>
                <Navigate to={{
                    pathname: "/",
                    state: {
                        from: window.location,
                        error: error
                    }
                }}/>
            </div>);
    }
}

export default OAuth2RedirectHandlerHook;