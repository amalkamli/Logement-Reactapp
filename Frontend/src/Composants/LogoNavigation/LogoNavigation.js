import React from 'react';
import '../LogoNavigation/LogoNavigation.css';
import LOGO from '../images/LOGO.png';
import { Link } from 'react-router-dom';

const LogoNavigation = () => {
  return (
    <div className='logo-navigation'>
      <img className="logo" src={LOGO} alt="Logo" />
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default LogoNavigation;
