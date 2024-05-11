import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardID from "../CardDetails/CardID";
import Slider from "../Slider/Slider";
import LogoNavigation from "../LogoNavigation/LogoNavigation";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

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

  return (
    <div>
         <LogoNavigation />
      {property ? (
        <>
        <Slider property={property} />
        <CardID property={property} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PropertyDetails;
