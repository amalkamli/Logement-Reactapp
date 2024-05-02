import React from 'react'
import LOGO from '../images/LOGO.png';
import background from '../images/IMG.png'

import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div className="header">
            <img className="logo" src={LOGO} alt="Logo" />
            <nav className="nav-links">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                </ul>
            </nav>
            <div className="conteneur">        
                <img className="background"src={background} alt='background' />
                <h1 className='background-title'>Chez vous, partout et ailleurs</h1>
            </div>

        </div>
      );
}
export default Header
