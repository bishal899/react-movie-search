const API_KEY = '0a82184979a62581e26e3fdf59c9b6d6'
const API_URL = 'https://api.themoviedb.org/3/'

// img_url = https://image.tmdb.org/t/p/w500
// https://api.themoviedb.org/3/movie/popular?api_key=0a82184979a62581e26e3fdf59c9b6d6

export const getPopulerMovies = async () => {
  const response = await fetch(`${API_URL}movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}
 
export const searchMovies = async (query) => {
  const response = await fetch(`${API_URL}search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();

  return data.results;
}