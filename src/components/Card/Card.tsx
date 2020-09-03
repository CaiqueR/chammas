import React from "react";

interface ICard {
  backSide: JSX.Element;
  color: string;
  heading: string;
  details: string | JSX.Element;
}
export const Card: React.FC<ICard> = ({
  backSide,
  color,
  heading,
  details,
}) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${color}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--${color}`}>
            {heading}
          </span>
        </h4>
        <div className="card__details">{details}</div>
      </div>
      <div className={`card__side card__side--back card__side--back-${color}`}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">{backSide}</p>
            <p className="card__price-value">$297</p>
          </div>
          <a href="/" className="btn btn-white">
            Veja agora
          </a>
        </div>
      </div>
    </div>
  );
};
