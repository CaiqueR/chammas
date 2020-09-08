import React, { useState, useCallback, MouseEvent } from "react";

import logo from "../../assets/img/logo-white.png";
import { Dialog } from "../Dialog/Dialog";

export const Header: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const openDialogg = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setOpenDialog(true);
  }, []);

  const closeDialog = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setOpenDialog(false);
  }, []);

  return (
    <>
      <Dialog
        opened={openDialog}
        title="Solicite um orçamento"
        description="Solicite um orçamento"
        closeDialog={closeDialog}
      />

      <header className="header" id="header">
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

          <a
            href="/"
            className="btn btn-white strong btn-animated"
            onClick={openDialogg}
          >
            Solicite um orçamento
          </a>

          <a
            href="#section-services"
            className="btn btn-white strong btn-animated"
          >
            Nossos serviços
          </a>
        </div>
      </header>
    </>
  );
};
