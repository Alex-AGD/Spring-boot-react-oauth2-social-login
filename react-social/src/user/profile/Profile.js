import React from 'react';
import './Profile.css';

function Profile (props) {
    return (
        <div className="profile-container">
            <div className="container">
                <div className="profile-info">
                    <div className="profile-avatar">
                        {
                            props.currentUser.imageUrl ? (
                                <img src={ props.currentUser.imageUrl } alt={ props.currentUser.name }/>
                            ) : (
                                <div className="text-avatar">
                                    <span>{ props.currentUser.name }</span>
                                </div>
                            )
                        }
                    </div>
                    <div className="profile-name">
                        <h2>Email</h2>
                        <p className="profile-email">{ props.currentUser.email ? props.currentUser.email : 'Email NotFound' }</p>
                    </div>
                    <div className="profile-name">
                        <h2>Учетная запись </h2>
                        <p className="profile-email">{ props.currentUser.provider }</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile