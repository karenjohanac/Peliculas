import { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import { useParams  } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css";
/* useParams hook que permite acceder a un parametro dinamico pasado a traves de la url en el router en este caso movieId */

/* useEffect permite añadir efectos secundarios a un componente */

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(
    {}
  ); /* ver y actualizar un estado del componente */

  /* como generos es un objeto toca mapearlo */
  // const [genero, setGenero] = useState( {} );
  const imageUrl = getMovieImg(movie.poster_path, 500);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      // setGenero( data.genres_ids[0] );
    });
  }, [movieId]); //se ejecuta cada vez que el movieId cambie

  
  return (
    <>
      <div className="detailsContainer">
        <img className="col movieImage" src={imageUrl} alt={movie.title} />
        <div className="col movieDetails">
          <p className="title"> 
            <strong>Título: {movie.title} </strong>
          </p>
          <p>
            <strong>Descripción: {movie.overview} </strong>
          </p>
        </div>
      </div>
      <div>
        <button className="button_v">Volver</button>
      </div>
    </>
  );
};
