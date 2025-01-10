import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { getPopulerMovies, searchMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopulerMovies = async () => {
      try {
        const populerMovies = await getPopulerMovies();
        setMovies(populerMovies)
      } catch (err) {
        console.log(err)
        setError('Failed to load movies...')
      } finally {
        setLoading(false)
      }
    };

    loadPopulerMovies()
  }, []);

  async function submitForm(e) {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading) return

    setLoading(true)

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null)
    } catch (err) {
      console.log(err)
      setError('Failed to search...')
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className="home">
      <form onSubmit={submitForm} className="search-form">
        <input
          type="text"
          placeholder="search movie name"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movies) => (
          <MovieCard movie={movies} key={movies.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
