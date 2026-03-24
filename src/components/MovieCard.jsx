/* eslint-disable react/prop-types */
import { useContext } from "react";
import "../css/MovieCard.css";
import MovieContext from "../services/movieContext";
import { FaHeart } from "react-icons/fa";

function MovieCard({ movie, id }) {
  const { handleFavBtn, favMovies } = useContext(MovieContext);
  const isFav = favMovies.some(m => m.id === id)
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="fav-btn" onClick={() => handleFavBtn(id)}>
            <FaHeart size={24} color={isFav ? "red" : "white"} />
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
