import React, { useState, useEffect } from 'react';
import { FloatingNav } from './components/ui/floating-navbar';
import { SearchBar } from './components/ui/search-bar';
import { LayoutGrid } from './components/ui/layout-grid';
import { TracingBeam } from './components/ui/tracing-beam';
import { GameDetails } from './components/ui/game-details';
import { Cart } from './components/ui/cart';

interface Game {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  longDescription?: string;
  features?: string[];
}

function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [claimedGames, setClaimedGames] = useState<Game[]>(() => {
    const saved = localStorage.getItem('claimedGames');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('claimedGames', JSON.stringify(claimedGames));
  }, [claimedGames]);

  const handleClaimGame = (game: Game) => {
    if (!claimedGames.find(g => g.id === game.id)) {
      setClaimedGames([...claimedGames, game]);
      setSelectedGame(null);
    }
  };

  if (showCart) {
    return <Cart games={claimedGames} onBack={() => setShowCart(false)} />;
  }

  if (selectedGame) {
    return (
      <GameDetails 
        game={selectedGame} 
        onBack={() => setSelectedGame(null)} 
        onClaim={handleClaimGame}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white grid-background">
      <FloatingNav onCartClick={() => setShowCart(true)} cartCount={claimedGames.length} />
      
      {/* Hero Section */}
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8">
          Bargain Gamers
        </h1>
        <p className="text-xl text-center text-gray-400 mb-12">
          Your destination for premium games at unbeatable prices
        </p>
        <SearchBar onGameSelect={setSelectedGame} />
      </div>

      {/* Games Grid */}
      <section id="games" className="py-32">
        <LayoutGrid 
          onGameSelect={setSelectedGame} 
          claimedGames={claimedGames}
        />
      </section>

      {/* Updates Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <TracingBeam />
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center text-gray-400">
        <p>© 2024 Bargain Gamers. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;