import React, { useState } from 'react';
import Background from '../images/Background.png';
import LOGO from '../images/LOGO.png';
import Vector from '../images/Vector.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const AboutPage = () => {
  const [collapseStates, setCollapseStates] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  });

  const toggleCollapse = (collapseKey) => {
    setCollapseStates((prevState) => ({
      ...prevState,
      [collapseKey]: !prevState[collapseKey],
    }));
  };
  

  return (
    <div>
      <div className='about-header'>
        <img className="logo" src={LOGO} alt="Logo" />
        <nav className="nav-links2">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </nav>
        <div className="conteneur-about"> 
          <img className="background-about" src={Background} alt='background' />
        </div>
      </div>

      <section className='Aboutcollapse'>
         <div className='collapseContainer'>
          <div className='Collapse_title' onClick={() => toggleCollapse('fiabilite')}>
            <p>Fiabilité</p>
            <img className={collapseStates.fiabilite ? 'Collapse_iconDown' : 'Collapse_iconUp'} src={Vector} alt='arrow' role="button"/>
          </div>
          {collapseStates.fiabilite && <div className='Collapse_text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>}
  </div>

        <div className='collapseContainer'>
          <div className='Collapse_title' onClick={() => toggleCollapse('respect')}>
            <p>Respect</p>
            <img className={collapseStates.respect ? 'Collapse_iconDown' : 'Collapse_iconUp'} src={Vector} alt='arrow' role="button"/>
          </div>
          {collapseStates.respect && <div className='Collapse_text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>}
        </div>

        <div className='collapseContainer'>
          <div className='Collapse_title' onClick={() => toggleCollapse('service')}>
            <p>Service</p>
            <img className={collapseStates.service ? 'Collapse_iconDown' : 'Collapse_iconUp'} src={Vector} alt='arrow' role="button"/>
          </div>
          {collapseStates.service && <div className='Collapse_text'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>}
        </div>

        <div className='collapseContainer'>
          <div className='Collapse_title' onClick={() => toggleCollapse('securite')}>
            <p>Sécurité</p>
            <img className={collapseStates.securite ? 'Collapse_iconDown' : 'Collapse_iconUp'} src={Vector} alt='arrow' role="button"/>
          </div>
          {collapseStates.securite && <div className='Collapse_text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>}
        </div>
      </section>

      <div className='footer-about'>
        <Footer />   
      </div>
    </div> 
  );
}

export default AboutPage;
