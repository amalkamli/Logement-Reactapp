import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardID from "../CardDetails/CardID";
import Slider from "../Slider/Slider";
import LogoNavigation from "../LogoNavigation/LogoNavigation";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPropertyDetails(id);
  }, );

  const fetchPropertyDetails = (id) => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          // If response is not ok, redirect to NotFoundPage
          navigate('/notfoundpage');
          return null;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setProperty(data); // Store property details in state
        }
      })
      .catch((error) =>
        console.error("Error fetching property details:", error)
      );
  };

  // If property is not loaded yet, return null to prevent rendering
  if (property === null) {
    return null;
  }

  return (
    <div>
      <LogoNavigation />
      <>
        <Slider property={property} />
        <CardID property={property} />
      </>
    </div>
  );
};

export default PropertyDetails;
