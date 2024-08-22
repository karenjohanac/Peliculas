import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "./MovieCard";
import "./ContexMovieCard.css"
 
export function ContextMovieCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);
      console.log(data);
    });
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id}  movie={movie} /> //crea un componenete de movie card 
      ))}
    </ul>
  );
}