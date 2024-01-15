import React from "react";
import "./feature.css";

function Feature(props) {
  // Dynamically load the feature image from the assets folder based on the provided image filename
  const featureImage = require(`../../assets/pictures/${props.image}`);

  return (
    <div className="feature-item">
      <img src={featureImage} alt={props.alt} className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Feature;
