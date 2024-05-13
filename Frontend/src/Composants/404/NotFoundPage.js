import React from 'react'
import { Link } from 'react-router-dom';
import NotFound from '../images/404.png'
import Footer from '../Footer/Footer';
import LogoNavigation from '../LogoNavigation/LogoNavigation';
import '../404/NotFoundPage.css';

const NotFoundPage = () => {
  return (
   <>
      <LogoNavigation />
  
    <div className="mainNotFound">
       <img className="QuatrecentQuatre" src={NotFound} alt='NotFound' />
       <p className='text'>Oups ! La page que vous demandez n'existe pas.
</p>
<Link to="/"className="return-link">Retourner sur la page d'accueil</Link>
    </div>

<div className='footernotfound'>
    <Footer />
  </div>
</>
  )

}

export default NotFoundPage
