import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.scss";
import foto from "assets/foto_Silas.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo={"Sobre Mim"}>
      <h3 className={styles.subtitulo}>Olá, sou Silas Mariosa.</h3>
      <img
        src={foto}
        alt="Foto Silas olhando para o aeroporto"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Vou contar um pouco sobre mim e como me tornei um desenvolvedor Front-end, C# e Unity
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou mesmo em 2022, Eu gostava muito da área da programação, mas na época não fazia ideia de que trabalharia com isso hoje. Atualmente estou bacharelando em Ciência da Computação. 
      </p>
      <p className={styles.paragrafo}>
        Sou graduado em Administração de Empresas pela Universidade Do Vale do Sapucaí (UNIVAS), em 2011. Realizei algumas pós-graduações focandas nas áreas de gestão financeira, tributária e projetos. Em 2020 comecei a cursar Ciências Contábeis más só em 2022. Quando resolvi realizar a transição de carreira. 
      </p>
      <p className={styles.paragrafo}>
        Comecei a conhecer o mundo da programação através da linguagem C, e passei pela C++ e C#, aonde eu deselvolvi um projeto chamado Easy Gabinete (http://silasmariosa.com.br/pages/easygabinete.html), precisava colocar em prático aquilo que estava aprendendo e resolver um défite que encontrei no emprego do momento. Comecei então a estudar sobre desenvolvimento front-end me apaixonei pela área.
      </p>
      <p className={styles.paragrafo}>
        Atualmente desenvolvo projetos pessoaas para manter o desafio diário e uma forma de prática constante. Desde então, tem sido apenas aprendizados atrás de aprendizados. 
      </p>
    </PostModelo>
  );
}
