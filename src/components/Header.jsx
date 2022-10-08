import React from 'react';
import '../styles/main.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className="header">
        <ul className="header__list">
        <li className="header__item"><Link className='header__link' to="/">Home</Link></li>
        <li className="header__item"><Link className='header__link' to="/create">Create</Link></li>
        </ul>
        </div>
        </>
    );
}

export default Header;
