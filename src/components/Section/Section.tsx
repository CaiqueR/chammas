import React from "react";

import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.jpg";
import { Card } from "../Card/Card";

export const Section: React.FC = () => {
  return (
    <>
      <section className="section-about">
        <div className="u-text-center u-margin-bottom-big">
          <h2 className="heading-secondary">Quem Somos</h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <p className="paragraphy">
              Fundada em 1989 pelo Engenheiro Geotécnico Riad Chammas, e sempre
              guiada pela excelência técnica, o nome Chammas é referência em
              Geotecnia. Hoje, somos 250 pessoas comprometidas com a extração de
              dados geotécnicos, com altíssimo rigor técnico e utilização das
              melhores tecnologias disponíveis no mundo. <br />
              <br />A Geotecnia é nosso universo, e somos implacáveis na busca
              por métodos e tecnologias que garantam maior agilidade, qualidade,
              confiabilidade e inteligência para os dados geotécnicos.
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

      <section className="section-features">
        <div className="u-text-center u-margin-bottom-big">
          <h2 className="heading-secondary white">Serviços Geotécnicos</h2>
        </div>

        <div className="row">
          <div className="col-1-of-4">
            <Card
              heading="Investigações Geotécnicas de Campo"
              details="Sondagens mistas, CPTu, SCPTu, VST, DMT, SDMT, PMT e vários outros tipos de Investigações Geotécnicas de Campo."
              backSide={<>Oi2</>}
              color="1"
            />
          </div>

          <div className="col-1-of-4">
            <Card
              heading="Ensaios Geotécnicos de Laboratório"
              details={
                <>
                  O mais completo Laboratório de Geotecnica do Brasil. <br />{" "}
                  Ensaios de caracterização de solos e especiais.
                </>
              }
              backSide={<>Oi2</>}
              color="2"
            />
          </div>

          <div className="col-1-of-4">
            <Card
              heading="Controle Geotécnico"
              details={
                <>
                  Controle Geotécnico de estruturas, como pilhas de rejeito e
                  barragens. <br />
                  Controle geotécnico ágil, monitorado em tempo real, garantindo
                  a máxima qualidade e gerenciamento.
                </>
              }
              backSide={<>Oi2</>}
              color="3"
            />
          </div>

          <div className="col-1-of-4">
            <Card
              heading="Instrumentação Geotécnica"
              details={
                <>
                  Instalação de instrumentos elétricos, analógicos e/ou
                  digitais, tais como piezômetros, inclinômetors, placas de
                  recalque, medidores de vazão, extensômetros, medidores de
                  nível e outros. <br />
                  Elaboração de arquitetura de rede para automação de
                  monitoramento geotécnico.
                </>
              }
              backSide={<>Oi2</>}
              color="4"
            />
          </div>
        </div>
      </section>

      <section className="section-tours">
        <div className="u-text-center u-margin-bottom-big">
          <h2 className="heading-secondary">Contato</h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-mail" />
              <h3 className="heading-tertiary u-margin-bottom-small">EMAIL</h3>
              <p className="feature-box__text">
                comercial@chammasengenharia.com.br
              </p>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-smartphone" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                Telefone
              </h3>
              <p className="feature-box__text">(31) 3296-5095</p>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-clock" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                Atendimento
              </h3>
              <p className="feature-box__text">
                Segunda a Sexta: <strong>08:00</strong> às{" "}
                <strong>17:00</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
