import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link to="/"><h1 className="logo">Star DB</h1></Link>
                <nav className="nav">
                    <ul className="nav__menu">
                        <li className="nav__item"><Link className="nav__item-link" to="/people/">People</Link></li>
                        <li className="nav__item"><Link className="nav__item-link" to="/planets/">Planets</Link></li>
                        <li className="nav__item"><Link className="nav__item-link" to="/starships/">Starships</Link></li>
                        <li className="nav__item"><Link className="nav__item-link" to="/secret">Secret</Link></li>
                        <li className="nav__item"><Link className="nav__item-link" to="/login">Login</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}