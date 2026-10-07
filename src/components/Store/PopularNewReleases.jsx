import React, { useState } from "react";

const randomGameImages = [
  "https://cdn.akamai.steamstatic.com/steam/apps/3010850/header.jpg",
  "https://cdn.akamai.steamstatic.com/steam/apps/2067820/header.jpg",
  "https://cdn.akamai.steamstatic.com/steam/apps/1488490/header.jpg",
  "https://cdn.akamai.steamstatic.com/steam/apps/2543830/header.jpg",
  "https://cdn.akamai.steamstatic.com/steam/apps/3407390/header.jpg",
  "https://cdn.akamai.steamstatic.com/steam/apps/2183900/header.jpg",
  "https://cdn.akamai.steamstatic.com/steam/apps/594650/header.jpg",
];

const popularGames = [
  {
    name: "Gears of War: E-Day",
    genres: "Action, Gore, Shooter, Third-Person Shooter",
    price: "₹5,499.00",
  },
  {
    name: "STAR WARS: Galactic Racer™",
    genres: "Racing, Multiplayer, Adventure, Cinematic",
    price: "₹2,799.00",
  },
  {
    name: "AION 2",
    genres: "Free to Play, MMORPG, Massively Multiplayer, Adventure",
    price: "Free",
  },
  {
    name: "ACE COMBAT 8: WINGS OF THEEVE",
    genres: "Flight, Action, Shooter, Military",
    price: "₹3,999.00",
  },
  {
    name: "RetroSpace",
    genres: "Immersive Sim, Action, First-Person, Sci-fi",
    oldPrice: "₹915.00",
    price: "₹823.00",
    discount: "-10%",
  },
  {
    name: "DYNASTY WARRIORS 3: Complete Edition Remastered",
    genres: "Hack and Slash, Spectacle fighter, RPG, Wargame",
    price: "₹2,930.00",
  },
  {
    name: "Dicevaders",
    genres: "Roguelike Deckbuilder, Deckbuilding, Roguelike, Strategy",
    oldPrice: "₹779.00",
    price: "₹701.00",
    discount: "-10%",
  },
  {
    name: "Nivalis Nights",
    genres: "Cyberpunk, Simulation, Life Sim, Management",
    oldPrice: "₹1,312.00",
    price: "₹1,187.00",
    discount: "-10%",
  },
  {
    name: "Way of the Hunter 2",
    genres: "Adventure, Simulation, Hunting, Shooter",
    oldPrice: "₹3,300.00",
    price: "₹2,458.00",
    discount: "-26%",
  },
  {
    name: "Minecraft Dungeons II",
    genres: "Action, Adventure, RPG, Dungeon Crawler",
    price: "₹2,399.00",
  },
  {
    name: "CONTROL Resonant",
    genres: "Hack and Slash, Action RPG, Story Rich, Lore-Rich",
    price: "₹3,599.00",
  },
  {
    name: "Graveyard Keeper 2",
    genres: "Sandbox, Building, Capitalism, Medieval",
    oldPrice: "₹1,625.00",
    price: "₹1,095.00",
    discount: "-33%",
  },
  {
    name: "Happy Wheels",
    genres: "Gore, Sandbox, Physics, Level Editor",
    price: "₹259.00",
  },
  {
    name: "Dressmaker",
    genres: "Crafting, Cozy, Design & Illustration, Job Simulator",
    price: "₹719.00",
  },
  {
    name: "iRacing® Studios NASCAR 26",
    genres: "Racing, Simulation, Driving, Automobile Sim",
    price: "₹2,499.00",
  },
  {
    name: "ENDLESS™ Legend 2",
    genres: "Strategy, Simulation, Grand Strategy, 4X",
    oldPrice: "₹1,998.00",
    price: "₹999.00",
    discount: "-50%",
  },
];

const under500 = [
  { price: "₹259", discount: "", image: 0 },
  { price: "₹409", discount: "", image: 1 },
  { price: "₹379", discount: "", image: 2 },
  { price: "₹289", discount: "", image: 3 },
  { price: "₹499", discount: "-33%", image: 4 },
  { price: "₹421", discount: "", image: 5 },
  { price: "₹407", discount: "-20%", image: 6 },
  { price: "₹392", discount: "-20%", image: 0 },
  { price: "₹419", discount: "-10%", image: 1 },
  { price: "₹278", discount: "", image: 2 },
  { price: "₹399", discount: "-25%", image: 3 },
  { price: "₹476", discount: "", image: 4 },
];

const under250 = [
  { price: "₹159", discount: "", image: 5 },
  { price: "₹40", discount: "-26%", image: 6 },
  { price: "₹207", discount: "-20%", image: 0 },
  { price: "₹209", discount: "-20%", image: 1 },
  { price: "₹199", discount: "-20%", image: 2 },
  { price: "₹143", discount: "-10%", image: 3 },
  { price: "₹239", discount: "", image: 4 },
  { price: "₹188", discount: "-10%", image: 5 },
  { price: "₹233", discount: "-10%", image: 6 },
  { price: "₹233", discount: "-10%", image: 0 },
  { price: "₹250", discount: "", image: 1 },
  { price: "₹250", discount: "", image: 2 },
];

function GameImage({ index, alt = "" }) {
  const [src, setSrc] = useState(
    randomGameImages[index % randomGameImages.length]
  );

  const handleError = () => {
    const nextIndex =
      (index + 1) % randomGameImages.length;

    setSrc(randomGameImages[nextIndex]);
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className="w-full h-full object-cover"
    />
  );
}

function DealCard({ item }) {
  return (
    <div className="relative h-[103px] bg-[#16283a] overflow-hidden group cursor-pointer">
      <GameImage index={item.image} />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {item.discount && (
        <span className="absolute bottom-1 left-1 bg-[#4c8b10] text-[#d2ff00] text-[11px] px-1 py-[2px]">
          {item.discount}
        </span>
      )}

      <span className="absolute bottom-1 right-1 text-white text-[11px] font-bold">
        {item.price}
      </span>
    </div>
  );
}

function DealSection({ title, items }) {
  return (
    <div>
      <h3 className="text-white text-[16px] font-normal mb-2">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-[4px]">
        {items.map((item, index) => (
          <DealCard
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default function PopularNewReleases() {
  const [activeTab, setActiveTab] = useState("popular");

  const visibleGames =
    activeTab === "popular"
      ? popularGames
      : popularGames.slice(0, 12);

  return (
    <section className="w-full max-w-[1200px] mx-auto mt-8 pb-20">

      {/* TOP TABS */}
      <div className="flex items-center h-[34px] border-b border-[#101923]">
        <button
          type="button"
          onClick={() => setActiveTab("popular")}
          className={`h-[34px] px-3 text-[14px] transition ${
            activeTab === "popular"
              ? "bg-[#2a475e] text-white"
              : "text-[#66c0f4] hover:text-white"
          }`}
        >
          Popular New Releases
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("new")}
          className={`h-[34px] px-3 text-[14px] transition ${
            activeTab === "new"
              ? "bg-[#2a475e] text-white"
              : "text-[#66c0f4] hover:text-white"
          }`}
        >
          New Releases
        </button>
      </div>

      {/* MAIN 2 COLUMN AREA */}
      <div className="grid grid-cols-[792px_396px] gap-3">

        {/* LEFT GAME LIST */}
        <div className="min-w-0">
          {visibleGames.map((game, index) => (
            <div
              key={game.name}
              className="h-[69px] mb-[5px] bg-[#16283a] flex cursor-pointer hover:bg-[#1d3449] transition"
            >
              {/* IMAGE */}
              <div className="w-[184px] h-[69px] flex-shrink-0 bg-black overflow-hidden">
                <GameImage
                  index={index}
                  alt={game.name}
                />
              </div>

              {/* INFO */}
              <div className="flex-1 min-w-0 px-3 py-[7px] relative">

                <div className="text-[#66c0f4] hover:text-white text-[15px] truncate">
                  {game.name}
                </div>

                <div className="text-[#6d8eaa] text-[12px] mt-[5px] truncate">
                  ▦ {game.genres}
                </div>

                {/* PRICE */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">

                  {game.discount && (
                    <span className="bg-[#4c8b10] text-[#d2ff00] text-[12px] px-1 py-2">
                      {game.discount}
                    </span>
                  )}

                  <div className="text-right">
                    {game.oldPrice && (
                      <div className="text-[#6b7e8e] line-through text-[10px]">
                        {game.oldPrice}
                      </div>
                    )}

                    <div
                      className={`text-[13px] font-bold ${
                        game.discount
                          ? "text-[#b4e000]"
                          : "text-white"
                      }`}
                    >
                      {game.price}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* SEE MORE */}
          <div className="flex justify-end items-center mt-1">
            <span className="text-white text-[12px] mr-2">
              See more:
            </span>

            <button
              type="button"
              onClick={() => setActiveTab("popular")}
              className="bg-[#1b4b6d] hover:bg-[#2a6a91] text-[#66c0f4] hover:text-white px-4 py-[6px] text-[12px]"
            >
              Popular New Releases
            </button>
          </div>
        </div>

        {/* RIGHT DEALS */}
        <div className="min-w-0 space-y-6">

          <DealSection
            title="Under ₹500"
            items={under500}
          />

          <DealSection
            title="Under ₹250"
            items={under250}
          />

          {/* BROWSE ALL */}
          <div className="flex justify-end items-center gap-1 pt-0">

            <span className="text-[#6d8eaa] text-[12px] mr-1">
              Browse all:
            </span>

            <button
              type="button"
              className="bg-[#1b4b6d] hover:bg-[#2a6a91] text-[#66c0f4] hover:text-white px-3 py-[6px] text-[12px]"
            >
              Under ₹500
            </button>

            <button
              type="button"
              className="bg-[#1b4b6d] hover:bg-[#2a6a91] text-[#66c0f4] hover:text-white px-3 py-[6px] text-[12px]"
            >
              Under ₹250
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}