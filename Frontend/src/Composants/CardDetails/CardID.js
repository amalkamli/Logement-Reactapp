import "../CardDetails/CardID.css";
import Footer from "../Footer/Footer";
import Collapse from "../Collapses/Collapse";

const CardID = ({ property }) => {
  // Vérifier si les données de la propriété sont en train d'être chargées
  if (!property) {
    // Si les données sont en cours de chargement, afficher "Loading..."
    return null; // Ou retourner un élément vide pour ne rien afficher
  }

  // Si les données sont chargées, rendre le contenu attendu
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
  return (
    <div>
      {property && (
        <div className="title-slides">
          <h1>{property.title}</h1>
        </div>
      )}
      {property && <div className="location-slide">{property.location}</div>}
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
                <img
                  className="hostpic"
                  src={property.host.picture}
                  alt={property.host.name}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="CollapseID">
        <Collapse
          className="collapseItem"
          title="Description"
          content={property.description}
        />
        <Collapse
          className="collapseItem"
          title="Équipements"
          content={
            <div>
              <ul className="list-equipmnt">
                {property.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default CardID;
