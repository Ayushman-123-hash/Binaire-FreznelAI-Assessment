const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function getPopularMovies(page = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  if (!response.ok) {
    throw new Error("TMDB API failed");
  }

  return response.json();
}

export function getTMDBImage(path) {
  if (!path) return "";
  return `https://image.tmdb.org/t/p/w500${path}`;
}