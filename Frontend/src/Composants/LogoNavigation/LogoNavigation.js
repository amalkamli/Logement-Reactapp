import React from 'react';
import '../LogoNavigation/LogoNavigation.css';
import LOGO from '../images/LOGO.png';
import {  NavLink } from 'react-router-dom';

const LogoNavigation = () => {
  return (
    <div className='logo-navigation'>
      <img className="logo" src={LOGO} alt="Logo" />
      <nav className="nav-links">
        <ul>
          <li><NavLink to="/" >Accueil </NavLink></li>
          <li><NavLink to="/about">À propos </NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default LogoNavigation;
