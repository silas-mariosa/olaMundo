import styles from "./Banner.module.scss"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minhaFotoSilas.jpg"

import React from 'react'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá!
            </h1>
            <p className={styles.paragrafo}>
                Boas vindos ao meu blog pessoal! Eu sou Silas Mariosa, desenvolvedor Fullstack e um entusiasta de tecnologia. Compartilho com vocês meu caros leitores vários conhecimentos que tem me ajuda e espero que seja útil para vocês também. Boa leitura!
            </p>
        </div>
        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido}
                src={circuloColorido}
                alt="Foto circulo"
                aria-hidden={true}
            />
            <img
                className={styles.minhaFoto}
                src={minhaFoto}
                alt="Foto Silas Mariosa"
            />
        </div>
    </div>
  )
}
