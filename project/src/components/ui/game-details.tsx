import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface Game {
  id: number;
  title: string;
  image: string;
  description: string;
  longDescription?: string;
  features?: string[];
}

interface GameDetailsProps {
  game: Game;
  onBack: () => void;
  onClaim: (game: Game) => void;
}

export const GameDetails = ({ game, onBack, onClaim }: GameDetailsProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white grid-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Games
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="relative">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
            <p className="text-3xl font-bold text-primary-500 mb-6">Free to Claim!</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About the Game</h2>
              <p className="text-gray-300 leading-relaxed">{game.longDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {game.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onClaim(game)}
              className="w-full py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors"
            >
              Claim Game
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};