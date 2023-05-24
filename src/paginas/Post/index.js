import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";
import styles from "./Post.module.scss"

export default function Post() {
  const parametros = useParams();

  const postsSortidos = posts
    .filter((post) => post.id !== +parametros.id)
    .sort((a,b) => a - b)
    .slice(0,4)  

  const post = posts.find((post) => {
    return post.id === +parametros.id;
  });

  if (!post) {
    return <NaoEncontrada />;
  }
  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      <h2 className={styles.tituloOutrosPosts }>
        Outros posts que você pode gostar...
      </h2>
      <ul className={styles.postsRecomendados}>
        {postsSortidos.map((post)=>(
          <li key={post.id}>
            <PostCard post={post}/>
          </li>
        ))}        
      {/* {quatroPrimeirosDoArray.map((post) => (
        <li>
          <PostCard post={post} />
        </li>
      ))}       */}
      </ul>
      </PostModelo>
    </PaginaPadrao>
  );
}
