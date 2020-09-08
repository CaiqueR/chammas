/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  MouseEvent,
  useRef,
  useState,
  useCallback,
  FormEvent,
} from "react";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import axios from "axios";

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
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const sendForm = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post("api/sendaboutmore", {
        name: name.current.value,
        email: email.current.value,
        message: message.current.value,
        phone: phone.current.value,
        subject: "Saber mais",
      });
      setIsLoading(false);
      form.current.reset();
      toast.success("Sua mensagem foi enviada com sucesso!");
    } catch {
      setIsLoading(false);
    }
  }, []);

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
          <form action="#" className="form" onSubmit={sendForm} ref={form}>
            <div className="form__group">
              <input
                type="text"
                className="form__input form__input-shadow "
                placeholder="Nome completo"
                id="name"
                required
                ref={name}
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
                ref={email}
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
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
                ref={phone}
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
                ref={message}
              />

              <label htmlFor="mensagem" className="form__label">
                Mensagem
              </label>
            </div>
            <div className="form__group">
              <button
                type="submit"
                className="btn btn-orange strong"
                disabled={isLoading}
              >
                Enviar
              </button>
              {isLoading && (
                <div style={{ display: "inline-block" }}>
                  <Loader type="Oval" color="#000" height={20} width={30} />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
