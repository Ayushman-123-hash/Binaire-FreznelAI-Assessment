function FeaturedGameCard({ game }) {
  return (
    <article className="group overflow-hidden">
      <div className="relative h-[154px] overflow-hidden bg-[#16202d]">
        <img
          src={game.image}
          alt={game.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:brightness-110"
        />
      </div>

      <div className="flex h-[34px] items-center justify-end bg-[#16202d]">
        <span className="bg-[#a4d007] px-2 py-[6px] text-[14px] font-bold leading-none text-black">
          {game.discount}
        </span>

        <div className="min-w-[105px] px-2 text-right">
          <div className="text-[11px] leading-3 text-[#666] line-through">
            {game.oldPrice}
          </div>

          <div className="text-[13px] leading-4 text-white">
            {game.price}
          </div>
        </div>
      </div>
    </article>
  );
}

function FeaturedTagColumn({ title, games }) {
  return (
    <div className="w-full md:w-1/2">
      {/* Heading */}
      <div className="mb-3">
        <h2 className="text-[21px] font-bold leading-6 text-white">
          {title}
        </h2>

        <p className="mt-1 text-[17px] leading-5 text-[#d7d7d7]">
          Featured tag
        </p>
      </div>

      {/* Gold Panel */}
      <div className="relative bg-[#755000]/75 px-[17px] pb-[45px] pt-[17px]">
        <div className="grid grid-cols-2 gap-3">
          {games.map((game) => (
            <FeaturedGameCard
              key={game.id}
              game={game}
            />
          ))}
        </div>

        {/* See More */}
        <button className="absolute bottom-[-1px] right-0 bg-[#d6d7d8] px-[18px] py-[5px] text-[13px] font-semibold text-[#222] transition hover:bg-white">
          See More
        </button>
      </div>
    </div>
  );
}

function FeaturedTags() {
  const hackAndSlashGames = [
    {
      id: 501,
      name: "Sekiro: Shadows Die Twice",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
      discount: "-50%",
      oldPrice: "₹4,999",
      price: "₹2,499",
    },
    {
      id: 502,
      name: "Stellar Blade",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3489700/header.jpg",
      discount: "-33%",
      oldPrice: "₹4,799",
      price: "₹3,215",
    },
    {
      id: 503,
      name: "Kingdom Hearts",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2552450/header.jpg",
      discount: "-70%",
      oldPrice: "₹3,499",
      price: "₹1,049",
    },
    {
      id: 504,
      name: "Diablo IV",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg",
      discount: "-25%",
      oldPrice: "₹5,299",
      price: "₹3,936",
    },
  ];

  const survivalGames = [
    {
      id: 601,
      name: "Project Zomboid",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/108600/header.jpg",
      discount: "-33%",
      oldPrice: "₹1,149",
      price: "₹769",
    },
    {
      id: 602,
      name: "Sons of the Forest",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg",
      discount: "-71%",
      oldPrice: "₹1,300",
      price: "₹377",
    },
    {
      id: 603,
      name: "Rust",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg",
      discount: "-50%",
      oldPrice: "₹1,799",
      price: "₹899",
    },
    {
      id: 604,
      name: "Dead by Daylight",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg",
      discount: "-60%",
      oldPrice: "₹1,159",
      price: "₹464",
    },
  ];

  return (
    <section className="px-5 pb-10 pt-1">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 md:flex-row">
        <FeaturedTagColumn
          title="HACK & SLASH GAMES"
          games={hackAndSlashGames}
        />

        <FeaturedTagColumn
          title="SURVIVAL GAMES"
          games={survivalGames}
        />
      </div>
    </section>
  );
}

export default FeaturedTags;