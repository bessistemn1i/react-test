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
                        <li className="nav__item"><Link className="nav__item-link" to="/people/">Персонажи</Link></li>
                        <li className="nav__item"><Link className="nav__item-link" to="/planets/">Планеты</Link></li>
                        <li className="nav__item"><Link className="nav__item-link" to="/starships/">Корабли</Link></li>
                        <li className="nav__item"><Link className="nav__item-link" to="/secret">Секрет</Link></li>
                        <li className="nav__item"><Link className="nav__item-link" to="/login">Логин</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}