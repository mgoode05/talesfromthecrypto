import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Navbar, NavItem} from 'react-materialize';

const NavBarTop = (props) => {
    let nav = props.user ?
    <Navbar brand='Tales From The Crypto' right>
      <NavItem href='/' className='NavBar-link'>Home</NavItem>
      <NavItem href='/watchlist'>Watchlist</NavItem>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavItem href='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</NavItem>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME {props.user.name}</span>
    </Navbar>
    :
    <Navbar>
      <NavItem href='/login' className='NavBar-link'>LOG IN</NavItem>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <NavItem href='/signup' className='NavBar-link'>SIGN UP</NavItem>
    </Navbar>;
    
    
    return (
        <header>
          {nav}
        </header>
      );
    };
    

export default NavBarTop