import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  // movie es una prop
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <>
      <li className={styles.MovieCard}>
        <Link to={`/movies/${movie.id}`}>
          <img
            width={230}
            height={345}
            src={imageUrl}
            alt={movie.title}
            className="movieImage"
          />
        </Link>
        <div className={styles.title}>
          <h1>{movie.title}</h1>
        </div>
      </li>
    </>
  );
};
