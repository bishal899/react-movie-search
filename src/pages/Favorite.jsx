import { useContext } from "react";
import "../css/Favorites.css";
import MovieContext from "../services/movieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favMovies } = useContext(MovieContext);
  return favMovies.length < 1 ? (
    <div className="fav-empty">
      <h2>No favorites yet..</h2>
      <p>Make favorites to see here.</p>
    </div>
  ) : (
    <div className="fav-content">
      {favMovies.map((movie) => (
        <MovieCard key={movie.id} id={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Favorite;
