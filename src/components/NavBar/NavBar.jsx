import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <header>
      <Link to='/' className='NavBar-link'>Home</Link>
      <Link to='/watchlist'>Watchlist</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME</span>
    </header>
    :
    <header>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </header>;
    
    
    return (
        <header>
          {nav}
        </header>
      );
    };
    

export default NavBar