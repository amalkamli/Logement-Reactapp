import React, { useState, useEffect } from 'react';
import NotFoundPage from '../404/NotFoundPage';

function PropertyDetails({ id }) {
  const [property, setProperty] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then(response => {
        if (!response.ok) {
          // Si la réponse n'est pas ok (par exemple, 404), signaler que le logement n'a pas été trouvé
          setNotFound(true);
          throw new Error('Property not found');
        }
        return response.json();
      })
      .then(data => setProperty(data))
      .catch(error => console.error('Error fetching property details:', error));
  }, [id]);

  if (notFound) {
    // Si le logement n'est pas trouvé, afficher la page 404
    return <NotFoundPage />;
  }

  if (!property) {
    // Si les données du logement ne sont pas encore chargées, afficher un indicateur de chargement
    return <h1>Loading...</h1>;
  }

  // Afficher les détails du logement
  return (
    <div>
      <h1>Property Details</h1>
      <p>Property ID: {property.id}</p>
      {/* Afficher d'autres détails de la propriété */}
    </div>
  );
}

export default PropertyDetails;
