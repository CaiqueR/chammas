/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { MouseEvent } from "react";
import photo1 from "../../assets/img/mining4.jpg";
import photo2 from "../../assets/img/mining5.jpg";

interface DialogProps {
  opened?: boolean;
  title?: string;
  description?: string;
  closeDialog?: (e: MouseEvent) => void;
}
export const Dialog: React.FC<DialogProps> = ({
  opened = false,
  title,
  description,
  closeDialog,
}) => {
  return (
    <div className={`dialog ${opened ? "dialog__opened" : ""}`} id="dialog">
      <div className="dialog__content">
        <div className="dialog__left">
          <img src={photo1} alt="Mineração" className="dialog__img" />
          <img src={photo2} alt="Mineração" className="dialog__img" />
        </div>
        <div className="dialog__right">
          <a
            href="#section-services"
            className="dialog__close"
            onClick={closeDialog}
          >
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-medium">
            {title || "Saiba mais"}
          </h2>
          <h2 className="heading-tertiary u-margin-bottom-small">
            {description ||
              "Envie-nos uma mensagem com o assunto que gostaria de saber mais."}
          </h2>
          <form action="#" className="form">
            <div className="form__group">
              <input
                type="text"
                className="form__input form__input-shadow "
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
                className="form__input form__input-shadow"
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
                className="form__input form__input-shadow"
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
              <textarea
                id="mensagem"
                className="form__textarea form__input-shadow form__textarea-full"
                name="mensagem"
                defaultValue="Digite uma mensagem"
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
  );
};
