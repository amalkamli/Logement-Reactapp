import "../Banner/Banner.css";
import React from "react";

const Banner = ({ backgroundImg, text }) => {
  return (
    <div className="banner">
      <div className="background-container">
        <img className="background" src={backgroundImg} alt="background" />
      </div>
      {text && <h1 className="background-title">{text}</h1>}
    </div>
  );
};

export default Banner;
