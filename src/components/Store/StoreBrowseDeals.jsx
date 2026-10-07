import { useState } from "react";

function StoreBrowseDeals() {
  const [categorySlide, setCategorySlide] = useState(0);
  const [priceSlide, setPriceSlide] = useState(0);

  const categories = [
    {
      id: 1,
      name: "ROGUE-LIKE",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
    },
    {
      id: 2,
      name: "FREE TO PLAY",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/header.jpg",
    },
    {
      id: 3,
      name: "SURVIVAL",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
    },
    {
      id: 4,
      name: "HORROR",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg",
    },
    {
      id: 5,
      name: "SCI-FI & CYBERPUNK",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    },
  ];

  const games = [
    {
      id: 1,
      name: "Stardew Valley",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
      discount: "-30%",
      oldPrice: "₹479",
      price: "₹335",
    },
    {
      id: 2,
      name: "How to PAK",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1262350/header.jpg",
      discount: "-38%",
      oldPrice: "₹646",
      price: "₹400",
    },
    {
      id: 3,
      name: "How to Fish",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1012790/header.jpg",
      discount: "-38%",
      oldPrice: "₹683",
      price: "₹423",
    },
    {
      id: 4,
      name: "Ori: The Collection",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/387290/header.jpg",
      discount: "-80%",
      oldPrice: "₹1,798",
      price: "₹354",
    },
    {
      id: 5,
      name: "R.E.P.O.",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3241660/header.jpg",
      discount: "-35%",
      oldPrice: "₹449",
      price: "₹291",
    },
  ];

  const previousCategory = () => {
    setCategorySlide((prev) => (prev - 1 + 4) % 4);
  };

  const nextCategory = () => {
    setCategorySlide((prev) => (prev + 1) % 4);
  };

  const previousPrice = () => {
    setPriceSlide((prev) => (prev - 1 + 4) % 4);
  };

  const nextPrice = () => {
    setPriceSlide((prev) => (prev + 1) % 4);
  };

  return (
    <section className="px-5 pb-10 pt-5">
      <div className="mx-auto max-w-[1200px]">

        {/* ================= BROWSE BY CATEGORY ================= */}

        <div className="mb-10">
          <h2 className="mb-5 text-[22px] font-bold text-white">
            Browse by Category
          </h2>

          <div className="relative">

            {/* Left Arrow */}
            <button
              onClick={previousCategory}
              className="absolute -left-[48px] top-1/2 z-20 flex h-[65px] w-[45px] -translate-y-1/2 items-center justify-center text-[60px] font-light leading-none text-white/80 transition hover:text-white"
              aria-label="Previous category"
            >
              ‹
            </button>

            {/* Category Cards */}
            <div className="grid grid-cols-5 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="group relative h-[136px] overflow-hidden rounded-[8px] bg-[#16202d]"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />

                  <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="max-w-[205px] bg-white px-3 py-2 text-center text-[15px] font-bold tracking-wide text-[#222] shadow-lg">
                      {category.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextCategory}
              className="absolute -right-[48px] top-1/2 z-20 flex h-[65px] w-[45px] -translate-y-1/2 items-center justify-center text-[60px] font-light leading-none text-white/80 transition hover:text-white"
              aria-label="Next category"
            >
              ›
            </button>
          </div>

          {/* Category Dots */}
          <div className="mt-3 flex justify-center gap-1">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                onClick={() => setCategorySlide(dot)}
                className={`h-[8px] rounded-full transition-all ${
                  categorySlide === dot
                    ? "w-[16px] bg-white"
                    : "w-[12px] bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Category slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ================= UNDER ₹500 ================= */}

        <div>
          {/* Heading */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[22px] font-bold text-white">
              Under ₹500
            </h2>

            <div className="flex items-center gap-2">
              <span className="mr-1 text-[13px] text-white">
                See more:
              </span>

              <button className="bg-[#d6d7d8] px-4 py-[6px] text-[12px] font-semibold text-[#222] transition hover:bg-white">
                Under ₹500
              </button>

              <button className="bg-[#d6d7d8] px-4 py-[6px] text-[12px] font-semibold text-[#222] transition hover:bg-white">
                Under ₹250
              </button>
            </div>
          </div>

          <div className="relative">

            {/* Left Arrow */}
            <button
              onClick={previousPrice}
              className="absolute -left-[48px] top-1/2 z-20 flex h-[65px] w-[45px] -translate-y-1/2 items-center justify-center text-[60px] font-light leading-none text-white/80 transition hover:text-white"
              aria-label="Previous games"
            >
              ‹
            </button>

            {/* Game Cards */}
            <div className="grid grid-cols-5 gap-3">
              {games.map((game) => (
                <article
                  key={game.id}
                  className="group overflow-hidden bg-[#16202d]"
                >
                  <div className="relative h-[133px] overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-110"
                    />
                  </div>

                  {/* Price */}
                  <div className="flex h-[29px] items-center justify-end bg-[#16202d]">
                    <span className="bg-[#a4d007] px-2 py-[6px] text-[13px] font-bold leading-none text-black">
                      {game.discount}
                    </span>

                    <div className="px-2 text-right">
                      <span className="mr-1 text-[10px] text-[#777] line-through">
                        {game.oldPrice}
                      </span>

                      <span className="text-[13px] text-white">
                        {game.price}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextPrice}
              className="absolute -right-[48px] top-1/2 z-20 flex h-[65px] w-[45px] -translate-y-1/2 items-center justify-center text-[60px] font-light leading-none text-white/80 transition hover:text-white"
              aria-label="Next games"
            >
              ›
            </button>
          </div>

          {/* Price Dots */}
          <div className="mt-3 flex justify-center gap-1">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                onClick={() => setPriceSlide(dot)}
                className={`h-[8px] rounded-full transition-all ${
                  priceSlide === dot
                    ? "w-[16px] bg-white"
                    : "w-[12px] bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Game slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default StoreBrowseDeals;