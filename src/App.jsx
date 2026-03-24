import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";
import { getPopulerMovies, searchMovies } from "./services/api";
import { useState, useEffect } from "react";
import MovieContext from "./services/movieContext";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchQuery.trim() !== "") return;

    const loadPopulerMovies = async () => {
      try {
        const populerMovies = await getPopulerMovies();
        setMovies(populerMovies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopulerMovies();
  }, [searchQuery]);

  async function submitForm(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function handleFavBtn(index) {
    const alreadyFav = favMovies.some(movie => movie.id === index)
    if (alreadyFav) {
      setFavMovies(prev => prev.filter(movie => movie.id !== index))
    } else {
      const newFavMovie = movies.find(movie => movie.id === index)
      if (!newFavMovie) return
      
      setFavMovies(prev => [...prev, newFavMovie])
    }
  }

  return (
    <div>
      <NavBar />
      <MovieContext.Provider
        value={{
          movies,
          submitForm,
          searchQuery,
          setSearchQuery,
          loading,
          handleFavBtn,
          favMovies,
        }}
      >
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
