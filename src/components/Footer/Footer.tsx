import React, { useCallback, MouseEvent } from "react";

import logo from "../../assets/img/logo-white.png";

export const Footer: React.FC = () => {
  const goToGoogleMaps = useCallback((e: MouseEvent) => {
    e.preventDefault();
    globalThis.open(
      "https://www.google.com/maps/place/Chammas+Engenharia/@-19.9646268,-43.950896,17z/data=!3m1!4b1!4m5!3m4!1s0xa697f3af3cca43:0xaf88b6f1ec52b2ec!8m2!3d-19.9646319!4d-43.9487073"
    );
  }, []);
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
          <a href="/" className="footer__link" onClick={goToGoogleMaps}>
            Chammas Engenhria &copy;
          </a>{" "}
          Rua Halley, 553 - Santa Lúcia, Belo Horizonte, MG - Brasil.
        </p>
      </div>
    </footer>
  );
};
