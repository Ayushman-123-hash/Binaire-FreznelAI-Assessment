import { useEffect, useRef, useState } from "react";
import TMDBService from "../../services/TMDBService";

const tmdb = new TMDBService();

export default function TMDBMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loaderRef = useRef(null);

  const loadMovies = async (pageNumber) => {
    if (loading) return;
    if (pageNumber < 1 || pageNumber > totalPages) return;

    try {
      setLoading(true);
      setError("");

      const data = await tmdb.getPopularMovies(pageNumber);

      setMovies(data.results || []);
      setPage(pageNumber);
      setTotalPages(Math.min(data.total_pages || 1, 10));
    } catch (err) {
      console.error(err);
      setError("Movies could not be loaded.");
    } finally {
      setLoading(false);
    }
  };

  // First API request
  useEffect(() => {
    loadMovies(1);
  }, []);

  // Custom lazy loading using IntersectionObserver
  useEffect(() => {
    const loader = loaderRef.current;

    if (!loader) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !loading &&
          page < totalPages
        ) {
          loadMovies(page + 1);
        }
      },
      {
        rootMargin: "300px",
      }
    );

    observer.observe(loader);

    return () => observer.disconnect();
  }, [page, totalPages, loading]);

  return (
    <section className="max-w-[1200px] mx-auto px-4 pb-16 page-enter">

      <div className="mb-5">
        <h2 className="text-[22px] text-white font-normal">
          Popular Movies
        </h2>

        <p className="text-[#8f98a0] text-[12px] mt-1">
          Powered by TMDB
        </p>
      </div>

      {error && (
        <div className="bg-[#3d1f24] text-[#ff6b6b] px-4 py-3 mb-5">
          {error}
        </div>
      )}

      {/* MOVIES */}
      <div className="grid grid-cols-5 gap-3">
        {movies.map((movie, index) => (
          <article
            key={movie.id}
            className="movie-card bg-[#16283a] cursor-pointer"
          >
            <img
              src={tmdb.getImage(movie.poster_path)}
              alt={movie.title}
              className="w-full h-[260px] object-cover"
            />

            <div className="p-3">
              <h3 className="text-[#66c0f4] text-[14px] truncate">
                {movie.title}
              </h3>

              <p className="text-[#8f98a0] text-[11px] mt-1">
                {movie.release_date || "Release date unavailable"}
              </p>

              <p className="text-[#c7d5e0] text-[11px] mt-2 line-clamp-2">
                {movie.overview || "No description available."}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* CUSTOM LAZY LOADING TRIGGER */}
      <div
        ref={loaderRef}
        className="h-16 flex items-center justify-center text-[#66c0f4] text-sm"
      >
        {loading
          ? "Loading more movies..."
          : page < totalPages
          ? "Scroll for more"
          : "No more movies"}
      </div>

      {/* MANUAL PAGINATION */}
      <div className="flex justify-center items-center gap-3 mt-4">

        <button
          type="button"
          disabled={page <= 1 || loading}
          onClick={() => loadMovies(page - 1)}
          className="px-4 py-2 bg-[#1b4b6d] text-[#66c0f4]
          hover:bg-[#2a6a91] hover:text-white
          active:scale-95
          disabled:opacity-40 disabled:cursor-not-allowed
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-[#66c0f4]"
        >
          Previous
        </button>

        <span className="text-white text-sm">
          Page {page} / {totalPages}
        </span>

        <button
          type="button"
          disabled={page >= totalPages || loading}
          onClick={() => loadMovies(page + 1)}
          className="px-4 py-2 bg-[#1b4b6d] text-[#66c0f4]
          hover:bg-[#2a6a91] hover:text-white
          active:scale-95
          disabled:opacity-40 disabled:cursor-not-allowed
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-[#66c0f4]"
        >
          Next
        </button>

      </div>

      {/* TMDB CREDIT */}
      <p className="text-[#6d8eaa] text-[10px] text-center mt-6">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>

    </section>
  );
}