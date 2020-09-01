import React from "react";

import styles from "./Header.module.css";
import logo from "../assets/img/logo-white.png";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles["logo-box"]}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>

      <div className={styles["text-box"]}>
        <h1 className={styles["heading-primary"]}>
          <span className={styles["heading-primary-main"]}>
            Chammas Engenharia
          </span>
          <span className={styles["heading-primary-sub"]}>
            Informação Geotécnica Confiável, Organizada e Inteligente.
          </span>
        </h1>

        <a
          href="/test"
          className={`${styles.btn} ${styles["btn-white"]} ${styles.strong} ${styles["btn-animated"]}`}
        >
          Solicite um orçamento
        </a>

        <a
          href="/test"
          className={`${styles.btn} ${styles["btn-white"]} ${styles.strong} ${styles["btn-animated"]}`}
        >
          Nossos serviços
        </a>
      </div>
    </header>
  );
};
