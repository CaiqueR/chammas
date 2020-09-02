import React from "react";

import logo from "../../assets/img/logo-white.png";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img className="header__logo" src={logo} alt="Logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Chammas Engenharia</span>
          <span className="heading-primary--sub">
            Informação Geotécnica Confiável, Organizada e Inteligente.
          </span>
        </h1>

        <a href="/test" className="btn btn-white strong btn-animated">
          Solicite um orçamento
        </a>

        <a href="/test" className="btn btn-white strong btn-animated">
          Nossos serviços
        </a>
      </div>
    </header>
  );
};
