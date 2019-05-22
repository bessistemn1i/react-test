import React, { Component } from 'react';
import './error-message.css';

export default class ErrorMessage extends Component {
    render() {
        return(
            <div className="err-message">
                <h2 className="err-title">You have a terrible message!</h2>
                <h5 className="err-subtitle">We don't know what to do with this mess. Please try reset your browser</h5>
            </div>
        )
    }
}