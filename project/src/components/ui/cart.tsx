import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from './3d-card';

interface Game {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface CartProps {
  games: Game[];
  onBack: () => void;
}

export const Cart = ({ games, onBack }: CartProps) => {
  const getDownloadLink = (gameId: number) => {
    switch (gameId) {
      case 1: // Cyber Nexus 2077
        return "https://google.com";
      case 2: // Stellar Odyssey
        return "https://bolt.new";
      default:
        return "#"; // Placeholder for other games
    }
  };

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

        <h1 className="text-4xl font-bold mb-8">Your Claimed Games</h1>

        {games.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl">No games claimed yet</p>
            <button
              onClick={onBack}
              className="mt-4 px-6 py-2 bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Browse Games
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <CardContainer key={game.id} className="w-[85%] mx-auto">
                <CardBody className="relative group/card w-full h-auto">
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
                    className="mt-1 text-xs text-neutral-300"
                  >
                    {game.description}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="mt-4"
                  >
                    <a
                      href={getDownloadLink(game.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-2 text-sm rounded-lg bg-primary-500 text-white font-bold transform transition-transform hover:scale-105"
                    >
                      Download Game
                    </a>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};