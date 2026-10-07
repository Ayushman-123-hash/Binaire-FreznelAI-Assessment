import { newReleases, recommendations, upcomingGames } from "../../data/games";

function GameGrid({ games: customGames }) {
  const defaultGames = [
    ...newReleases,
    ...recommendations,
    ...upcomingGames,
  ];

  const games = customGames || defaultGames;

  return (
    <section className="px-5 pb-10 pt-4">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-x-3 gap-y-3 md:grid-cols-4">
          {games.slice(0, 16).map((game) => (
            <article
              key={game.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="relative aspect-[460/215] overflow-hidden bg-[#16202d]">
                <img
                  src={game.image}
                  alt={game.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:brightness-110"
                />
              </div>

              <div className="flex h-[40px] items-center justify-end bg-[#16202d]">
                <span className="bg-[#a4d007] px-2 py-[6px] text-[14px] font-bold leading-none text-black">
                  {game.discount || "-20%"}
                </span>

                <div className="min-w-[105px] px-2 text-right">
                  <div className="text-[11px] leading-3 text-[#666] line-through">
                    {game.oldPrice || "₹1,999"}
                  </div>

                  <div className="text-[13px] leading-4 text-white">
                    {game.price || "₹999"}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameGrid;