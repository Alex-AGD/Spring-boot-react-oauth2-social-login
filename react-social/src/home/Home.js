import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <h2 className="title">
                        <span className="title-word title-word-1">Spring Boot </span>
                        <span className="title-word title-word-2">React OAuth2 </span>
                        <span className="title-word title-word-3">Social </span>
                        <span className="title-word title-word-4">Login </span>
                    </h2>
                </div>
                <div className="container">
                    <div className="graf-bg-container">
                        <div className="graf-layout">
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;