function GameCard({ game }) {
  return (
    <article className="group min-w-0 cursor-pointer">
      <div className="relative overflow-hidden bg-[#162536]">
        <img
          src={game.image}
          alt={game.name}
          loading="lazy"
          className="block aspect-[616/353] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {game.discount && (
          <div className="absolute bottom-0 right-0 flex items-stretch">
            <div className="flex items-center bg-[#4c6b22] px-2 py-1 text-[18px] font-bold text-[#beee11]">
              {game.discount}
            </div>

            <div className="bg-[#172536] px-3 py-1 text-[11px] leading-tight">
              <div className="text-[#73808b] line-through">
                {game.oldPrice}
              </div>

              <div className="text-white">
                {game.price}
              </div>
            </div>
          </div>
        )}
      </div>

      <h3 className="mt-2 truncate text-[13px] text-[#d6d7d8] transition-colors group-hover:text-[#66c0f4]">
        {game.name}
      </h3>
    </article>
  );
}

export default GameCard;