import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LOGO from "../images/LOGO.png";
import Vector from "../images/Vector.png";
import Arrow1 from "../images/arrow_left.png";
import Arrow2 from "../images/arrow_right.png";
import Footer from "../Footer/Footer";

const CardID = () => {
  // Récupérer l'ID de la propriété depuis les paramètres d'URL
  const { id } = useParams();
  // État pour stocker les détails de la propriété
  const [property, setProperty] = useState(null);
  // État pour gérer l'état de l'expansion/réduction des descriptions
  const [collapseStates, setCollapseStates] = useState({
    Description: false,
    Equipments: false,
  });
  // État pour gérer l'index de l'image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 

  // Effet pour charger les détails de la propriété depuis l'API
  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProperty(data);
        // Initialiser l'état de l'expansion/réduction des descriptions
        const initialCollapseStates = {};
        // Vérifier si data.descriptions est défini avant d'itérer
        if (data.descriptions) {
          data.descriptions.forEach((description) => {
            initialCollapseStates[description.key] = false;
          });
        }
        setCollapseStates(initialCollapseStates);
      })
      .catch((error) =>
        console.error("Error fetching property details:", error)
      );
  }, [id]);
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % (property?.pictures?.length || 1)
    );
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + (property?.pictures?.length || 1)) %
        (property?.pictures?.length || 1)
    );
  };
  if (!property) {
    return <div>Loading...</div>;
  }
  // Fonction pour générer les étoiles en fonction du rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}>&#9733;</span>); // Étoile pleine
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Étoile vide
      }
    }
    return stars;
  };

  // Fonction pour basculer l'état de l'expansion/réduction des descriptions
  const toggleCollapse = (collapseKey) => {
    setCollapseStates((prevCollapseStates) => ({
      ...prevCollapseStates,
      [collapseKey]: !prevCollapseStates[collapseKey],
    }));
  };

  return (
    <div>
      <div className="CARDID-header">
        <img className="logo-CARDID" src={LOGO} alt="Logo" />
        <nav className="nav-links-CARDID">
          <ul className="nav-links-ul-CARDID">
            <li className="li-CARDID">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">À propos</Link>
            </li>
          </ul>
        </nav>
      </div>

     <div className="slideshow-Slidecontainer">
      {property && property.pictures && property.pictures.length > 1 && (
        <div className="arrows">
          <button onClick={prevImage} className="arrow-button">
            <img
              className="arrow_left"
              src={Arrow1}
              alt="Flèche gauche"
            />
          </button>

          <button onClick={nextImage} className="arrow-button">
            <img
              className="arrow_right"
              src={Arrow2}
              alt="Flèche droite"
            />
          </button>
        </div>
      )}
      {property && property.pictures && (
        <div className="slideshow-imgcontainer">
       <div className="Slideshow_numbers"><span>{`${currentImageIndex + 1} / ${property.pictures.length}`}</span> </div>

          <img className="Slideshow_imgSlide" 
          src={property.pictures[currentImageIndex]}
          alt={property.pictures}
    />
        </div>
)}
</div>

     {property && (
        <div className="title-slides">
          <h1>{property.title}</h1>
        </div>
      )}
      {property && (
        <div className="location-slide">
          {property.location}
        </div>
      )}  
      {property && property.tags && (
        <div className="tag-container">
          {property.tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
        </div>
      )}
       <div className="rightContainer">
      {property && (
        <div className="rating">{renderStars(property.rating)}</div>
      )}
      <div className="host-slide">
  {property && property.host && (
    <div className="hostname">
      {property.host.name}
      <div className="piccontainer">
      <img className="hostpic" src={property.host.picture} alt={property.host.name} />
      </div>
    </div>
  )}
      </div>
      </div>
      <div className="CONTAINER">
        <div className="collapseContainercard">
          <div className='Collapse_title' onClick={() => toggleCollapse('description')}>
            <p>Description</p>
            <img className={collapseStates.description ? 'Collapse_iconDown' : 'Collapse_iconUp'} src={Vector} alt='arrow' role="button" />
          </div>
          {collapseStates.description && <div>{property.description}</div>}
        </div>

        <div className="collapseContainercard">
          <div className='Collapse_title' onClick={() => toggleCollapse('equipments')}>
            <p>Équipments</p>
            <img className={collapseStates.equipments ? 'Collapse_iconDown' : 'Collapse_iconUp'} src={Vector} alt='arrow' role="button" />
          </div>
          {collapseStates.equipments && <div><ul className="list-equipmnt">
              {property.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
            </div>}
        </div>
      </div>

  <div className="footercardid">  
   <Footer />
   </div>
    </div>
  );
};

export default CardID;
