import styles from "./Inicio.module.scss";
import posts from "json/posts.json";
import Post from "componentes/Post";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
