function StoreNavbar() {
  return (
    <div className="bg-[#1b2838] text-white">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-2">
        <nav className="flex flex-wrap items-center gap-5 text-sm">
          <a
            href="#browse"
            className="hover:text-white hover:underline focus:outline-none focus:ring-1 focus:ring-white"
          >
            Browse
          </a>

          <a
            href="#recommendations"
            className="hover:text-white hover:underline focus:outline-none focus:ring-1 focus:ring-white"
          >
            Recommendations
          </a>

          <a
            href="#categories"
            className="hover:text-white hover:underline focus:outline-none focus:ring-1 focus:ring-white"
          >
            Categories
          </a>

          <a
            href="#ways"
            className="hover:text-white hover:underline focus:outline-none focus:ring-1 focus:ring-white"
          >
            Ways to Play
          </a>

          <a
            href="#special"
            className="hover:text-white hover:underline focus:outline-none focus:ring-1 focus:ring-white"
          >
            Special Sections
          </a>
        </nav>

        <div className="flex min-w-[220px] items-center bg-[#316282] p-1">
          <input
            type="text"
            placeholder="search"
            className="w-full bg-white px-3 py-1.5 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#66c0f4]"
          />

          <button
            type="button"
            aria-label="Search"
            className="px-2 text-white hover:text-[#66c0f4] focus:outline-none"
          >
            🔍
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoreNavbar;