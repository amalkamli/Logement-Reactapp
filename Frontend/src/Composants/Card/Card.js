import React from 'react';


function Card({ title, imageUrl, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}
export default Card;
