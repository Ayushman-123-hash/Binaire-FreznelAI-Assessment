import { useState } from "react";

function StoreGameTabs() {
  const [activeTab, setActiveTab] = useState("Top Sellers");
  const [freeOnly, setFreeOnly] = useState(true);

  const tabs = [
    "Popular New Releases",
    "Top Sellers",
    "Popular Upcoming",
    "Trending Free",
  ];

  const games = [
    {
      id: 701,
      name: "AION 2",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
      description:
        "Free to Play, MMORPG, Massively Multiplayer, Adventure",
      date: "Released: 5 Oct, 2026",
      price: "Free",
    },
    {
      id: 702,
      name: "Counter-Strike 2",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
      description: "FPS, Shooter, Multiplayer, Competitive",
      date: "Released: 21 Aug, 2012",
      price: "Free",
    },
    {
      id: 703,
      name: "STAR WARS: Galactic Racer™",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
      description:
        "Racing, Adventure, Multiplayer, Cinematic",
      date: "Released: 6 Oct, 2026",
      price: "₹2,799.00",
    },
    {
      id: 704,
      name: "Gears of War: E-Day",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
      description:
        "Action, Gore, Shooter, Third-Person Shooter",
      date: "Available: 6 Oct, 2026",
      price: "₹5,499.00",
    },
    {
      id: 705,
      name: "EA SPORTS FC™ 27",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1304930/header.jpg",
      description:
        "Sports, Football (Soccer), Multiplayer, Singleplayer",
      date: "Released: 25 Sep, 2026",
      price: "₹3,999.00",
    },
    {
      id: 706,
      name: "The Outlast Trials",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1304930/header.jpg",
      description:
        "Horror, Multiplayer, Co-op, Survival Horror",
      date: "Released: 5 Mar, 2024",
      discount: "-90%",
      oldPrice: "₹1,600.00",
      price: "₹160.00",
    },
    {
      id: 707,
      name: "Cyberpunk 2077",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
      description:
        "Cyberpunk, Open World, Nudity, RPG",
      date: "Released: 10 Dec, 2020",
      discount: "-70%",
      oldPrice: "₹2,999.00",
      price: "₹899.00",
    },
    {
      id: 708,
      name: "PUBG: BATTLEGROUNDS",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
      description:
        "Survival, Shooter, Battle Royale, Multiplayer",
      date: "Released: 21 Dec, 2017",
      price: "Free",
    },
    {
      id: 709,
      name: "Yu-Gi-Oh! Master Duel",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1449850/header.jpg",
      description:
        "Card Game, Free to Play, Strategy, Trading Card Game",
      date: "Released: 19 Jan, 2022",
      price: "Free",
    },
    {
      id: 710,
      name: "WARDOGS",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
      description:
        "Early Access, FPS, Military, Action",
      date: "Released: 10 Sep, 2026",
      price: "₹1,969.00",
    },
  ];

  /* Right side - 6 images */
  const rightGames = [
    {
      id: 801,
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    },
    {
      id: 802,
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    },
    {
      id: 803,
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
    },
    {
      id: 804,
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg",
    },
    {
      id: 805,
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
    },
    {
      id: 806,
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    },
  ];

  const visibleGames =
    activeTab === "Top Sellers"
      ? games
      : activeTab === "Popular New Releases"
        ? games.slice(0, 7)
        : activeTab === "Popular Upcoming"
          ? games.slice(2, 9)
          : games.slice(1, 10);

  return (
    <section className="px-5 pb-12 pt-7">
      <div
        className="mx-auto max-w-[1200px] bg-[#351813]/70 px-5 py-6"
        style={{
          backgroundImage:
            "url('https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/seasonalsales/586fc7dd791c9d03aef33ecf/1f3c228/tiled_bg_english.jpg?t=1790803106')",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* Tabs */}
        <div className="flex items-center gap-9 border-b border-white/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 text-[18px] font-bold transition ${
                activeTab === tab
                  ? "text-white"
                  : "text-[#c1b6b3] hover:text-white"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <span className="absolute -bottom-[17px] left-0 h-[3px] w-full bg-[#67c1f5]" />
              )}
            </button>
          ))}
        </div>

        {/* Checkbox */}
        <div className="flex justify-end py-5">
          <label className="flex cursor-pointer items-center gap-2 text-[12px] text-white">
            <input
              type="checkbox"
              checked={freeOnly}
              onChange={(e) => setFreeOnly(e.target.checked)}
              className="h-[14px] w-[14px] accent-[#67c1f5]"
            />

            <span>Include free to play items</span>

            <span className="ml-1 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#aaa] text-[10px] text-[#ddd]">
              i
            </span>
          </label>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-[minmax(0,2.15fr)_350px] gap-5">

          {/* LEFT GAME LIST */}
          <div className="space-y-3">
            {visibleGames.map((game) => (
              <article
                key={game.id}
                className="group grid min-h-[94px] grid-cols-[230px_minmax(0,1fr)] overflow-hidden bg-[#552219]/90 transition duration-200 hover:bg-[#68291f]"
              >
                {/* Game image */}
                <div className="h-[94px] overflow-hidden bg-[#16202d]">
                  <img
                    src={game.image}
                    alt={game.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:brightness-110"
                  />
                </div>

                {/* Details */}
                <div className="relative flex min-w-0 flex-col justify-between px-4 py-3">
                  <div className="pr-28">
                    <h3 className="truncate text-[16px] font-normal text-white">
                      {game.name}
                    </h3>

                    <p className="mt-1 truncate text-[12px] text-[#ead8d3]">
                      {game.description}
                    </p>
                  </div>

                  <p className="text-[12px] text-[#c99387]">
                    {game.date}
                  </p>

                  {/* Price */}
                  <div className="absolute bottom-3 right-3 flex items-center">
                    {game.discount ? (
                      <>
                        <span className="bg-[#a4d007] px-2 py-[6px] text-[13px] font-bold text-black">
                          {game.discount}
                        </span>

                        <div className="bg-[#16202d] px-3 py-[4px] text-right">
                          <div className="text-[10px] text-[#777] line-through">
                            {game.oldPrice}
                          </div>

                          <div className="text-[13px] text-white">
                            {game.price}
                          </div>
                        </div>
                      </>
                    ) : (
                      <span className="bg-[#16202d] px-4 py-[8px] text-[13px] text-white">
                        {game.price}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}

            {/* See More */}
            <div className="flex items-center justify-end gap-2 pt-2">
              <span className="text-[13px] font-semibold text-white">
                See more:
              </span>

              <button className="bg-[#d6d7d8] px-4 py-1 text-[12px] font-semibold text-[#222] transition hover:bg-white">
                {activeTab}
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <aside className="border border-[#703b2c] bg-[#321612]/90 p-3">
            <div className="mb-3 px-1">
              <h2 className="text-[19px] font-bold text-white">
                Counter-Strike 2
              </h2>

              <p className="mt-2 text-[12px] text-[#ddd]">
                English Reviews
              </p>

              <p className="text-[12px] text-[#67c1f5]">
                Very Positive (2,628,705)
              </p>

              <div className="mt-3 flex flex-wrap gap-1">
                {[
                  "FPS",
                  "Shooter",
                  "Multiplayer",
                  "Competitive",
                  "Action",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#5b2c21] px-2 py-1 text-[10px] text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="space-y-3 pb-2">
              {rightGames.map((game) => (
                <div
                  key={game.id}
                  className="h-[150px] overflow-hidden border border-[#4e2a21] bg-[#16202d]"
                >
                  <img
                    src={game.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 hover:brightness-110"
                  />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default StoreGameTabs;