import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const CardList = () => {
  const [properties, setProperties] = useState([]); 
  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []); 
  return (
    <div className="card-list">
      {properties.map(property => (
        <Link to={`/details/${property.id}`} key={property.id} className="card-link">
          <Card
            title={property.title}
            imageUrl={property.cover}
          />
        </Link>
      ))}
    </div>
  );
}
export default CardList;
