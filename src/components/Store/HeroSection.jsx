import { useState } from "react";
import { heroGames } from "../../data/games";

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroGames.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroGames.length) % heroGames.length
    );
  };

  return (
    <section className="bg-transparent">
      {/* Autumn Hero */}
      <div
        className="relative h-[560px] w-full bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://shared.akamai.steamstatic.com/store_item_assets/steam/clusters/seasonalsales/586fc7dd791c9d03aef33ecf/f33f04a3a01a58a35b2659dab2b6b7fc739c0dca/page_bg_english.webp?t=1790803106')",
        }}
      />

      {/* Hero Games */}
      <div className="relative bg-transparent px-10 py-10">
        {/* Previous Button */}
        <button
          onClick={previousSlide}
          className="absolute left-5 top-1/2 z-20 flex h-16 w-12 -translate-y-1/2 items-center justify-center bg-black/20 text-5xl text-white/70 transition hover:bg-black/40 hover:text-white"
          aria-label="Previous games"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 z-20 flex h-16 w-12 -translate-y-1/2 items-center justify-center bg-black/20 text-5xl text-white/70 transition hover:bg-black/40 hover:text-white"
          aria-label="Next games"
        >
          ›
        </button>

        <div className="mx-auto w-full max-w-[1120px]">
          {/* Game Cards */}
          <div className="grid grid-cols-3 gap-4">
            {heroGames.map((game) => (
              <div
                key={game.id}
                className="group overflow-hidden bg-[#16202d] shadow-2xl transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[410px] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />

                  {/* Price */}
                  <div className="absolute bottom-0 left-0 right-0 flex h-14 items-center justify-end bg-[#1b2838]/95 px-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#4c6b22] px-2 py-1 text-sm font-semibold text-[#bbee11]">
                        {game.discount}
                      </span>

                      <div className="text-right">
                        <div className="text-xs text-gray-400 line-through">
                          {game.oldPrice}
                        </div>

                        <div className="text-sm font-semibold text-white">
                          {game.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Game Name */}
                <div className="bg-[#16202d] px-3 py-2">
                  <p className="truncate text-sm font-medium text-white">
                    {game.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {heroGames.map((game, index) => (
              <button
                key={game.id}
                onClick={() => setActiveSlide(index)}
                className={`h-2 w-2 rounded-full transition ${
                  activeSlide === index
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;