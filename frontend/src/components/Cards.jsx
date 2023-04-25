import React from "react";
import "../styles/components/cards.css";

export const Cards = (props) => {
  
  return (
    <div className="card">
      <div className="Image-container">
        <img className="Image-top" src={props.imageURL1} alt="palm tree" />
        <img className="Image-Bottom" src={props.imageURL2} alt="palm tree" />
      </div>
      <div className="card-description">
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Cards;
