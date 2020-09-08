/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useCallback } from "react";

export const Navigation: React.FC = () => {
  const checkBox = useRef<HTMLInputElement>(null);

  const goToSection = useCallback(() => {
    checkBox.current.checked = false;
  }, []);
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        ref={checkBox}
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon" />
      </label>

      <div className="navigation__background" />

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="#header"
              className="navigation__link"
              onClick={goToSection}
            >
              Início
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-about"
              className="navigation__link"
              onClick={goToSection}
            >
              Quem somos
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-services"
              className="navigation__link"
              onClick={goToSection}
            >
              Serviços Geotécnicos
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-contact"
              className="navigation__link"
              onClick={goToSection}
            >
              Contato
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-curriculum"
              className="navigation__link"
              onClick={goToSection}
            >
              Trabalhe conosco
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
