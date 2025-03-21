import React from "react";
import { CardContainer, CardBody, CardItem } from "./3d-card";

interface Game {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  longDescription?: string;
  features?: string[];
}

interface LayoutGridProps {
  onGameSelect: (game: Game) => void;
  claimedGames: Game[];
}

export const LayoutGrid = ({ onGameSelect, claimedGames }: LayoutGridProps) => {
  const games = [
    {
      id: 1,
      title: "Cyber Nexus 2077",
      price: "Free",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60",
      description: "Experience the future in this cyberpunk adventure",
      longDescription: "Immerse yourself in a dystopian future where cybernetic augmentations and corporate warfare shape the destiny of humanity. Navigate through neon-lit streets, engage in high-stakes combat, and uncover a conspiracy that threatens to reshape the world as we know it.",
      features: [
        "Open-world cyberpunk environment",
        "Deep character customization",
        "Multiple story paths",
        "Advanced combat system"
      ]
    },
    {
      id: 2,
      title: "Stellar Odyssey",
      price: "Free",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
      description: "Explore the vast universe in this epic space saga",
      longDescription: "Embark on an interstellar journey across the cosmos, where ancient mysteries and advanced civilizations await your discovery. Command your own starship, forge alliances, and make decisions that will echo throughout the galaxy.",
      features: [
        "Vast space exploration",
        "Strategic ship combat",
        "Dynamic faction system",
        "Procedurally generated worlds"
      ]
    },
    {
      id: 3,
      title: "Dragon's Legacy",
      price: "Free",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=60",
      description: "Embark on a mythical journey with dragons",
      longDescription: "Enter a realm where dragons rule the skies and ancient magic flows through the land. Forge a bond with legendary creatures, master the art of dragon riding, and defend your kingdom from dark forces that threaten to destroy everything you hold dear.",
      features: [
        "Dragon taming & riding",
        "Magical combat system",
        "Rich fantasy world",
        "Epic questlines"
      ]
    },
    {
      id: 4,
      title: "Neon Warriors",
      price: "Free",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60",
      description: "Battle in neon-lit arenas with futuristic warriors",
      longDescription: "Step into the arena where high-tech gladiators compete for glory in spectacular neon-drenched combat. Customize your warrior with cutting-edge technology, master unique fighting styles, and rise through the ranks to become a legend.",
      features: [
        "Fast-paced combat",
        "Unique character classes",
        "Competitive multiplayer",
        "Regular tournaments"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {games.map((game) => {
        const isClaimed = claimedGames.some(g => g.id === game.id);
        
        return (
          <CardContainer key={game.id} className="w-[85%] mx-auto">
            <CardBody 
              className="relative group/card w-full h-auto hover:shadow-2xl cursor-pointer"
              onClick={() => onGameSelect(game)}
            >
              <CardItem
                translateZ="50"
                className="w-full rounded-xl overflow-hidden"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-32 object-cover"
                />
              </CardItem>
              <CardItem
                translateZ="30"
                className="mt-2 text-base font-bold text-white"
              >
                {game.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="mt-1 text-xs text-neutral-300 line-clamp-2"
              >
                {game.description}
              </CardItem>
              <CardItem
                translateZ="20"
                className="mt-1 text-sm font-semibold text-white"
              >
                {isClaimed ? 'Claimed' : game.price}
              </CardItem>
              <CardItem translateZ="50" className="mt-2">
                <button 
                  className={`px-2 py-1 text-xs rounded-lg font-bold transform transition-transform hover:scale-105 ${
                    isClaimed 
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-white text-black'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isClaimed) {
                      onGameSelect(game);
                    }
                  }}
                  disabled={isClaimed}
                >
                  {isClaimed ? 'Claimed' : 'Claim Now'}
                </button>
              </CardItem>
            </CardBody>
          </CardContainer>
        );
      })}
    </div>
  );
};