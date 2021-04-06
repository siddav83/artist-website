import React from 'react';
import TrainerCard from './components/TrainerCard';
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <main>
      <h1>Personal Pokédex</h1>
      <TrainerCard />
      <PokemonCard />
    </main>
  );
}

export default App;
