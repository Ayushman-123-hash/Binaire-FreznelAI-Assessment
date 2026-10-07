import { useState } from "react";
import { discountGames } from "../../data/games";

function DiscountSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % discountGames.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + discountGames.length) % discountGames.length
    );
  };

  return (
    <section className="relative px-5 py-10">

      {/* ================= GIFT CARD ================= */}
      <div className="mx-auto mb-2 flex max-w-[1200px] justify-end">
        <button className="flex items-center bg-[#1a9fff] pr-4 text-white transition hover:bg-[#66c0f4]">

          <img
            src="https://cdn.akamai.steamstatic.com/store/home/gc_fan.webp"
            alt="Gift Cards"
            className="h-[36px] w-auto object-contain"
          />

          <span className="ml-2 text-[15px] font-bold">
            Send a Gift Card
          </span>

        </button>
      </div>

      {/* ================= DISCOUNT PANEL ================= */}
      <div className="relative mx-auto max-w-[1200px] bg-[#5b1f13]/85 px-4 py-6">

        {/* Heading */}
        <div className="mb-5 flex items-start justify-between">

          <div>
            <h2 className="text-[22px] font-bold text-white">
              Featured Deep Discounts
            </h2>

            <p className="mt-1 text-[16px] text-[#ddd]">
              Especially great deals on some of the all-time greats
            </p>
          </div>

          <button className="bg-[#d6d7d8] px-7 py-2 text-[14px] font-semibold text-[#222] transition hover:bg-white">
            See All
          </button>

        </div>

        {/* Cards + Arrows */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={previousSlide}
            className="absolute -left-[58px] top-1/2 z-20 flex h-[58px] w-[45px] -translate-y-1/2 items-center justify-center bg-[#1b3b55]/90 text-[45px] leading-none text-white/80 transition hover:bg-[#2a5778]"
            aria-label="Previous discounts"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-3">

            {discountGames.slice(0, 3).map((game) => (
              <article
                key={game.id}
                className="group overflow-hidden bg-[#16202d]"
              >

                <img
                  src={game.image}
                  alt={game.name}
                  loading="lazy"
                  className="h-[220px] w-full object-cover transition duration-300 group-hover:brightness-110"
                />

                <div className="flex items-center justify-end bg-[#16202d]">

                  <span className="bg-[#a4d007] px-2 py-1 text-[14px] font-bold text-black">
                    {game.discount}
                  </span>

                  <div className="px-2 py-1 text-right">

                    <div className="text-[12px] text-gray-500 line-through">
                      {game.oldPrice}
                    </div>

                    <div className="text-[13px] text-white">
                      {game.price}
                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-[58px] top-1/2 z-20 flex h-[58px] w-[45px] -translate-y-1/2 items-center justify-center bg-[#1b3b55]/90 text-[45px] leading-none text-white/80 transition hover:bg-[#2a5778]"
            aria-label="Next discounts"
          >
            ›
          </button>

        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-1">

          {discountGames.slice(0, 5).map((game, index) => (
            <button
              key={game.id}
              onClick={() => setActiveSlide(index)}
              className={`h-[7px] rounded transition-all ${
                activeSlide === index
                  ? "w-[16px] bg-white"
                  : "w-[10px] bg-white/30"
              }`}
              aria-label={`Go to discount slide ${index + 1}`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default DiscountSection;