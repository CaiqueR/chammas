/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

export const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon" />
      </label>

      <div className="navigation__background" />

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/test" className="navigation__link">
              Início
            </a>
          </li>
          <li className="navigation__item">
            <a href="/test" className="navigation__link">
              Quem somos
            </a>
          </li>
          <li className="navigation__item">
            <a href="/test" className="navigation__link">
              Serviços Geotécnicos
            </a>
          </li>
          <li className="navigation__item">
            <a href="/test" className="navigation__link">
              Contato
            </a>
          </li>
          <li className="navigation__item">
            <a href="/test" className="navigation__link">
              Trabahe conosco
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
