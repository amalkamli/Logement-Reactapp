import React from 'react'
import LOGO from '../images/LOGO.png';
import { Link } from 'react-router-dom';
import NotFound from '../images/404.png'
import Footer from '../Footer/Footer';

const NotFoundPage = () => {
  return (
    <div className='mainpage'>
      <div className="header">
    <img className="logo" src={LOGO} alt="Logo" />
    <nav className="nav-links">
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
        </ul>
    </nav>
    </div>
    
    <div className="mainNotFound">
       <img className="QuatrecentQuatre" src={NotFound} alt='NotFound' />
       <p className='text'>Oups ! La page que vous demandez n'existe pas.
</p>
<Link to="/"className="return-link">Retourner sur la page d'accueil</Link>
    </div>
<div className ='footernotfoud'>
    <Footer />
  </div>
    </div>

  )

}

export default NotFoundPage
