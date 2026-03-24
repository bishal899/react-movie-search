import { useContext } from "react";
import MovieContext from "../services/movieContext";
import MovieCard from "./MovieCard";

export default function MovieContainer() {
  const { movies, loading } = useContext(MovieContext);
  return (
    <div className="movies-grid">
      {loading ? (
        <p style={{color: styles.p.color}}>Loading...</p>
      ) : (
        movies.map((movie) => <MovieCard movie={movie} key={movie.id} id={movie.id} />)
      )}
    </div>
  );
}

const styles = {
    p: {
        color: 'red'
    }
}