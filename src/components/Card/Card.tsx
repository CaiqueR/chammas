import React from "react";

interface ICard {
  backSide: JSX.Element;
  color: string;
  picture: string;
  heading: string;
  details: string;
}
export const Card: React.FC<ICard> = ({
  backSide,
  color,
  picture,
  heading,
  details,
}) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${color}`}>&nbsp;</div>
        <div className="card__heading">{heading}</div>
        <div className="card__details">{details}</div>
      </div>
      <div className={`card__side card__side--back card__side--back-${color}`}>
        {backSide}
      </div>
    </div>
  );
};
