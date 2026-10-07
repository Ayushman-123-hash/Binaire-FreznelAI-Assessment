import GameCard from "./GameCard";
import SectionTitle from "./SectionTitle";

function GameRow({ title, subtitle, games }) {
  return (
    <section className="mb-10">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        action="See All"
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default GameRow;