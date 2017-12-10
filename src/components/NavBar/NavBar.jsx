import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h1>
                <Link to='/'>Home</Link>
            &nbsp;
                <Link to='/watchlist'>Watchlist</Link>
            </h1>
        </header>
    )
}

export default NavBar