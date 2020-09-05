import React from "react";

import logo from "../../assets/img/logo-white.png";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img
          src={logo}
          alt="Logo Chammas Engenharia"
          className="footer__logo"
        />
      </div>
      <div className="footer__chammas">
        <p className="footer__copyright footer__navigation">
          <a href="/test" className="footer__link">
            Chammas Engenhria &copy;
          </a>{" "}
          Rua Halley, 553 - Santa Lúcia, Belo Horizonte, MG - Brasil.
        </p>
      </div>
    </footer>
  );
};
