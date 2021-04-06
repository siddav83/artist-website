import React from 'react';
import TrainerCard from './components/TrainerCard';
import PokemonCards from './components/PokemonCards';

function App() {
  return (
    <main>
      <h1>Personal Pokédex</h1>
      <TrainerCard />
      <PokemonCards />
    </main>
  );
}

export default App;
