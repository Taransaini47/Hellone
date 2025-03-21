import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

interface Game {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  longDescription?: string;
  features?: string[];
}

interface SearchBarProps {
  onGameSelect: (game: Game) => void;
}

export const SearchBar = ({ onGameSelect }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const games: Game[] = [
    {
      id: 1,
      title: "Cyber Nexus 2077",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60",
      description: "Experience the future in this cyberpunk adventure",
      longDescription: "Immerse yourself in a dystopian future where cybernetic augmentations and corporate warfare shape the destiny of humanity.",
      features: ["Open-world cyberpunk environment", "Deep character customization", "Multiple story paths"]
    },
    {
      id: 2,
      title: "Stellar Odyssey",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
      description: "Explore the vast universe in this epic space saga",
      longDescription: "Embark on an interstellar journey across the cosmos, where ancient mysteries await your discovery.",
      features: ["Vast space exploration", "Strategic ship combat", "Dynamic faction system"]
    },
    {
      id: 3,
      title: "Dragon's Legacy",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=60",
      description: "Embark on a mythical journey with dragons",
      longDescription: "Enter a realm where dragons rule the skies and ancient magic flows through the land.",
      features: ["Dragon taming & riding", "Magical combat system", "Rich fantasy world"]
    },
    {
      id: 4,
      title: "Neon Warriors",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60",
      description: "Battle in neon-lit arenas with futuristic warriors",
      longDescription: "Step into the arena where high-tech gladiators compete for glory in spectacular combat.",
      features: ["Fast-paced combat", "Unique character classes", "Competitive multiplayer"]
    }
  ];

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="search" className="relative w-full max-w-2xl mx-auto">
      <motion.div
        className={`relative flex items-center ${
          isFocused ? "bg-white/10" : "bg-white/5"
        } rounded-full border border-white/10 transition-colors duration-200`}
        whileHover={{ scale: 1.02 }}
      >
        <Search className="w-5 h-5 text-white/50 ml-4 transition-transform duration-200 group-hover:scale-110" />
        <input
          type="text"
          placeholder="Search games..."
          className="w-full bg-transparent text-white px-4 py-3 outline-none placeholder-white/50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
      </motion.div>
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="p-2">
              {searchQuery === "" ? (
                <div className="text-sm text-white/50 px-3 py-2">
                  Start typing to search...
                </div>
              ) : filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                  <div
                    key={game.id}
                    className="group px-3 py-2 hover:bg-white/10 rounded-lg cursor-pointer text-white flex items-center gap-3"
                    onClick={() => {
                      onGameSelect(game);
                      setIsFocused(false);
                    }}
                  >
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-10 h-10 rounded object-cover transition-transform duration-200 group-hover:scale-110"
                    />
                    <div>
                      <div className="font-medium">{game.title}</div>
                      <div className="text-sm text-white/70">{game.price}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-white/50 px-3 py-2">
                  No games found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};