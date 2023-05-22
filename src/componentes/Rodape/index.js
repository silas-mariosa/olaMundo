import styles from "./Rodape.module.scss";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

import React from "react";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />

      Desenvolvido por Silas Marios.
    </footer>
  );
}
