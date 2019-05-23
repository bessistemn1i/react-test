import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {
    if(isLoggedIn) {
        return (
            <div className="item-wrap">
                <h1>This is a secret info</h1>
            </div>
        )
    }
    return <Redirect to="/"/>
}

export default SecretPage;