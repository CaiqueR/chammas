/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, FormEvent } from "react";

import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.jpg";
import { Card } from "../Card/Card";

export const Section: React.FC = () => {
  const sendCurriculumForm = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

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
              backSide={<>Somente por</>}
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
              backSide={<>Somente por</>}
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
              backSide={<>Somente por</>}
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
              backSide={<>Somente por</>}
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

      <section className="section-curriculum">
        <div className="row">
          <div className="curriculum">
            <div className="curriculum__form">
              <h2 className="heading-secondary u-margin-bottom-small">
                Trabalhe conosco
              </h2>
              <form action="#" className="form">
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Nome completo"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Nome completo
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email"
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="tel"
                    className="form__input"
                    placeholder="Telefone"
                    id="telefone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                  <label htmlFor="telefone" className="form__label">
                    Telefone
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="file"
                    className="form__input"
                    placeholder="Currículo"
                    id="curriculo"
                    required
                  />
                  <label htmlFor="curriculo" className="form__label">
                    Currículo
                  </label>
                </div>

                <div className="form__group">
                  <textarea
                    id="mensagem"
                    className="form__textarea"
                    name="mensagem"
                    defaultValue="Escreva um breve resumo sobre você"
                  />

                  <label htmlFor="mensagem" className="form__label">
                    Mensagem
                  </label>
                </div>
                <div className="form__group">
                  <button type="submit" className="btn btn-orange strong">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
