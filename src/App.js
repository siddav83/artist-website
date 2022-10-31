import React from 'react';
import TrainerCard from './components/TrainerCard';
import PokemonCards from './components/PokemonCards';
import Artist from './components/Artist';
import Albums from './components/Albums';

function App() {
  return (
    <main>
      <h1>Lana Del Rey</h1>
      < Artist />
      < Albums />
      {/* <TrainerCard /> */}
      {/* <PokemonCards /> */}
    </main>
  );
}

export default App;
