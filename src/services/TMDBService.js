class TMDBService {
  constructor() {
    this.baseURL = "https://api.themoviedb.org/3";
    this.apiKey = import.meta.env.VITE_TMDB_API_KEY;
  }

  async getPopularMovies(page = 1) {
    const response = await fetch(
      `${this.baseURL}/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Unable to fetch movies");
    }

    return response.json();
  }

  getImage(path) {
    if (!path) return "";

    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}

export default TMDBService;