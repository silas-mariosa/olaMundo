import styles from "./Post.module.scss";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="imagem de capa"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer}>Ler</button>
      </div>
    </Link>
  );
}
