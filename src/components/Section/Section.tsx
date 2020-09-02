import React from "react";

import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.jpg";

export const Section: React.FC = () => {
  return (
    <section className="section-about">
      <div className="u-text-center u-margin-bottom-big">
        <h2 className="heading-secondary">A CHAMMAS ENGENHARIA</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <p className="paragraphy">
            Fundada em 1989 pelo Engenheiro Geotécnico Riad Chammas, e sempre
            guiada pela excelência técnica, o nome Chammas é referência em
            Geotecnia. Hoje, somos 250 pessoas comprometidas com a extração de
            dados geotécnicos, com altíssimo rigor técnico e utilização das
            melhores tecnologias disponíveis no mundo. A Geotecnia é nosso
            universo, e somos implacáveis na busca por métodos e tecnologias que
            garantam maior agilidade, qualidade, confiabilidade e inteligência
            para os dados geotécnicos.
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={image3}
              alt="Foto da mineração"
              className="composition__photo composition__photo--p3"
            />
            <img
              src={image2}
              alt="Foto do galpão"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={image1}
              alt="Foto do laboratório"
              className="composition__photo composition__photo--p1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
