import React, { useEffect, useState } from "react";
import '../Slider/Slider.css';
import Arrow1 from "../images/arrow_left.png";
import Arrow2 from "../images/arrow_right.png";
import { useParams } from "react-router-dom";

const Slider = () => {
  // Récupérer l'ID de la propriété depuis les paramètres d'URL
  const { id } = useParams();
  // État pour stocker les détails de la propriété
  const [property, setProperty] = useState(null);
  // État pour stocker l'index de l'image actuelle
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effet pour charger les détails de la propriété depuis l'API
  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProperty(data);
      })
      .catch((error) =>
        console.error("Error fetching property details:", error)
      );
  }, [id]);

  // Fonction pour afficher l'image suivante
  const nextImage = () => {
    if (property && property.pictures && currentImageIndex < property.pictures.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Fonction pour afficher l'image précédente
  const prevImage = () => {
    if (property && property.pictures && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
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
          <div className="Slideshow_numbers">
            <span>{`${currentImageIndex + 1} / ${property.pictures.length}`}</span>
          </div>
          <img
            className="Slideshow_imgSlide" 
            src={property.pictures[currentImageIndex]}
            alt={` ${currentImageIndex + 1}`}
            />
        </div>
      )}
    </div>
  );
};

export default Slider;
