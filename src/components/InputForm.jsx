import { useContext } from "react";
import MovieContext from "../services/movieContext";

export default function InputForm() {
  const { submitForm, searchQuery, setSearchQuery } = useContext(MovieContext);
  return (
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
  );
}
