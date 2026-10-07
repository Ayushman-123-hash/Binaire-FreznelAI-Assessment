import GameGrid from "../components/Store/GameGrid";
import HeroSection from "../components/Store/HeroSection";
import DiscountSection from "../components/Store/DiscountSection";
import DiscoverySection from "../components/Store/DiscoverySection";
import FeaturedTags from "../components/Store/FeaturedTags";
import StoreGameTabs from "../components/Store/StoreGameTabs";
import StoreBrowseDeals from "../components/Store/StoreBrowseDeals";

import {
  firstGridGames,
  secondGridGames,
} from "../data/games";

function StoreHome() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-white"
      style={{
        backgroundImage: "url('/images/steam-bg.jfif')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center top",
      }}
    >
      <div className="relative z-10">
        <HeroSection />

        <DiscountSection />

        <GameGrid games={firstGridGames} />

        <DiscoverySection />

        <GameGrid games={secondGridGames} />

        <FeaturedTags />

        <StoreGameTabs />

        <StoreBrowseDeals />

      </div>
    </div>
  );
}

export default StoreHome;