import React from 'react';
import '../Card/Card.css';
const Card = ({ title, imageUrl }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="title-overlay"><h2 className="card-title">{title}</h2>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
