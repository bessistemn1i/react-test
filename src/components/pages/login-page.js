import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({onLogin, isLoggedIn}) => {
    if(isLoggedIn) {
        return <Redirect to="/"/>
    }
    return (
        <div>
            <p>Login to see secret page</p>
            <button onClick={onLogin}>LogIn</button>
        </div>
    )
}

export default LoginPage;