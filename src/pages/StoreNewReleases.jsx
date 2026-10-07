import PopularNewReleases from "../components/Store/PopularNewReleases";
import { useRef, useState, useEffect } from "react";

function StoreNewReleases() {
  const games = [
    {
      id: 3010850,
      name: "Gears of War: E-Day",
      price: "₹ 5,499",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3010850/1abb0c5ef76c14f463dd6e3964adb64f984237d2/header.jpg",
    },
    {
      id: 4078430,
      name: "STAR WARS: Galactic Racer™",
      price: "₹ 2,799",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4078430/97215eb609882139ce6a28419116be23fcf5ac86/header.jpg",
    },
    {
      id: 3393110,
      name: "AION 2",
      price: "Free To Play",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3393110/8ba6511e1889fd45561956e603d04fac1a89645e/header.jpg",
    },
    {
      id: 4080220,
      name: "EA SPORTS FC™ 27",
      price: "₹ 3,999",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4080220/05d419a45653a1299ce46d13dbff4533fa076c1c/header.jpg",
    },
    {
      id: 1867240,
      name: "WARDOGS",
      price: "₹ 1,969",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1867240/59d4daf753bd5d982e6675f7eee363bc817c574e/header.jpg",
    },
    {
      id: 1478500,
      name: "Big Walk",
      price: "₹ 1,599",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1478500/62eeee1507dbac905e128a62f2ce690550238db0/header.jpg",
    },
    {
      id: 4212480,
      name: "Ragnarok: The New World",
      price: "Free To Play",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4212480/95dc4b582f4d09290a50f6ea717136df91247be6/header.jpg",
    },
    {
      id: 4570720,
      name: "DragonSword: Awakening",
      price: "₹ 2,499",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4570720/96a897e98f4472e656fbe6681191b3066cab6056/header.jpg",
    },
    {
      id: 3812600,
      name: "ReStory: Chill Electronics Repairs",
      price: "₹ 1,299",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3812600/e99dc0e496e4e39fc6f80053ddfd4d5e38fc0125/header.jpg",
    },
  ];

  const scrollRef = useRef(null);

  const [sliderValue, setSliderValue] = useState(0);

  const updateSlider = () => {
    if (!scrollRef.current) return;

    const element = scrollRef.current;
    const maxScroll = element.scrollWidth - element.clientWidth;

    if (maxScroll <= 0) {
      setSliderValue(0);
      return;
    }

    setSliderValue((element.scrollLeft / maxScroll) * 100);
  };

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    element.addEventListener("scroll", updateSlider);
    updateSlider();

    return () => {
      element.removeEventListener("scroll", updateSlider);
    };
  }, []);

  const moveSlider = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -470 : 470,
      behavior: "smooth",
    });
  };

  const handleSliderChange = (event) => {
    const value = Number(event.target.value);

    setSliderValue(value);

    if (!scrollRef.current) return;

    const element = scrollRef.current;
    const maxScroll = element.scrollWidth - element.clientWidth;

    element.scrollLeft = (value / 100) * maxScroll;
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[#1b2838] pb-[80px] text-white"
      style={{
        backgroundImage: "url('/steam-bg.jfif')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center top",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] pt-[48px]">

        {/* ================= FIRST COMPONENT ================= */}

        <div className="mb-[48px]">
          <div className="mb-[10px] text-[12px]">
            <button className="text-[#8f98a0] transition hover:text-white">
              All Products
            </button>

            <span className="mx-[5px] text-[#5d6b78]">
              &gt;
            </span>

            <span className="text-[#66a4c8]">
              New Releases
            </span>
          </div>

          <h1 className="mb-[28px] text-[34px] font-normal leading-[38px] text-white">
            New Releases
          </h1>

          <div className="grid grid-cols-2 gap-[20px]">

            {/* CONTROL RESONANT */}

            <button
              type="button"
              className="group block w-full cursor-pointer overflow-hidden bg-[#417d9f] text-left shadow-[0_4px_12px_rgba(0,0,0,0.45)] transition duration-200 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#66c0f4]"
            >
              <div className="h-[276px] w-full overflow-hidden bg-[#111]">
                <img
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3669870/d2c7e4d021ce81d9712ce7983efa9327fe29fece/capsule_616x353.jpg"
                  alt="CONTROL Resonant"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                />
              </div>

              <div className="h-[64px] bg-[#417d9f] px-[15px] pt-[13px]">
                <p className="text-[16px] leading-[19px] text-[#d6e9f4]">
                  Popular this month
                </p>

                <p className="mt-[2px] text-[13px] leading-[16px] text-white">
                  ₹ 3,599
                </p>
              </div>
            </button>

            {/* EA SPORTS FC 27 */}

            <button
              type="button"
              className="group block w-full cursor-pointer overflow-hidden bg-[#417d9f] text-left shadow-[0_4px_12px_rgba(0,0,0,0.45)] transition duration-200 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#66c0f4]"
            >
              <div className="h-[276px] w-full overflow-hidden bg-[#111]">
                <img
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4080220/05d419a45653a1299ce46d13dbff4533fa076c1c/header.jpg"
                  alt="EA SPORTS FC 27"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                />
              </div>

              <div className="h-[64px] bg-[#417d9f] px-[15px] pt-[13px]">
                <p className="text-[16px] leading-[19px] text-[#d6e9f4]">
                  Popular this month
                </p>

                <p className="mt-[2px] text-[13px] leading-[16px] text-white">
                  ₹ 3,999
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* ================= TOP SELLERS ================= */}

        <section className="mb-[45px]">

          <div className="mb-[10px] flex items-center">
            <h2 className="text-[16px] font-normal">
              <span className="text-white">
                New Top Sellers
              </span>

              <span className="ml-[4px] text-[#8f98a0]">
                Released This Month
              </span>
            </h2>
          </div>

          {/* GAME CARDS */}

          <div
            ref={scrollRef}
            className="hide-scrollbar grid grid-flow-col auto-cols-[230px] gap-[8px] overflow-hidden scroll-smooth"
          >
            {games.map((game) => (
              <button
                key={game.id}
                type="button"
                className="group block h-[136px] w-[230px] overflow-hidden bg-[#16202d] text-left transition hover:brightness-110 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#66c0f4]"
              >
                <div className="h-[106px] w-[230px] overflow-hidden bg-[#111]">
                  <img
                    src={game.image}
                    alt={game.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-200 group-hover:brightness-110"
                  />
                </div>

                <div className="flex h-[30px] items-center justify-end bg-[#26394b] px-[9px]">
                  <span className="text-[12px] font-bold text-white">
                    {game.price}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* ================= BOTTOM SCROLL BAR ================= */}

          <div className="mt-[8px] flex h-[19px] w-full items-center bg-[#102131]">

            <button
              type="button"
              onClick={() => moveSlider("left")}
              aria-label="Scroll left"
              className="flex h-[19px] w-[39px] items-center justify-center bg-[#1c3b52] text-[14px] font-bold text-[#67c1f5] transition hover:bg-[#2a5778]"
            >
              ◀
            </button>

            <div className="flex h-[19px] flex-1 items-center px-[3px]">
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={sliderValue}
                onChange={handleSliderChange}
                aria-label="Game list horizontal scroll"
                className="steam-slider h-[8px] w-full cursor-pointer appearance-none bg-[#071521] outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() => moveSlider("right")}
              aria-label="Scroll right"
              className="flex h-[19px] w-[39px] items-center justify-center bg-[#1c3b52] text-[14px] font-bold text-[#67c1f5] transition hover:bg-[#2a5778]"
            >
              ▶
            </button>

          </div>
        </section>
      </div>

      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .steam-slider::-webkit-slider-thumb {
          appearance: none;
          width: 62px;
          height: 8px;
          background: #26394b;
          border-radius: 0;
          cursor: grab;
        }

        .steam-slider::-webkit-slider-thumb:hover {
          background: #31536d;
        }

        .steam-slider::-moz-range-thumb {
          width: 62px;
          height: 8px;
          background: #26394b;
          border: none;
          border-radius: 0;
          cursor: grab;
        }

        .steam-slider::-moz-range-progress {
          background: transparent;
        }

        .steam-slider::-moz-range-track {
          background: #071521;
          height: 8px;
        }
      `}</style>

        <PopularNewReleases />
    </main>
  );
}

export default StoreNewReleases;