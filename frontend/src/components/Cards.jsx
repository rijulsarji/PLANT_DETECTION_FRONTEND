import React from "react";
import imageTop from "../assets/peepalTreeTop.jpg";
import imageBottom from "../assets/peeplarTreeBottom.jpg";
import "../styles/components/cards.css";

export const Cards = (props) => {
  return (
    <div class>
    {props.side%2 === 0 ? (
    <div className="card">
      <div className="Image-container">
        <img className="Image-top" src={imageTop} alt="palm tree" />
        <img className="Image-Bottom" src={imageBottom} alt="palm tree" />
      </div>
      <div className="card-description">
        <h2>Peepal tree</h2>
        <p>
          The peepal tree, also known as Ficus religiosa, is a species of fig
          tree that is considered sacred in many cultures, particularly in
          Hinduism, Buddhism, and Jainism. It is native to the Indian
          subcontinent and other parts of Southeast Asia.
        </p>
      </div>
    </div>
    ): (
    <div className="card2">
    <div className="Image-container">
      <img className="Image-top" src={imageTop} alt="palm tree" />
      <img className="Image-Bottom" src={imageBottom} alt="palm tree" />
    </div>
    <div className="card-description">
      <h2>Peepal tree</h2>
      <p>
        The peepal tree, also known as Ficus religiosa, is a species of fig
        tree that is considered sacred in many cultures, particularly in
        Hinduism, Buddhism, and Jainism. It is native to the Indian
        subcontinent and other parts of Southeast Asia.
      </p>
    </div>
  </div>
    )}
  </div>
  );
};
export default Cards;
