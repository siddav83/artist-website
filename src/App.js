import React, { Component } from 'react';
import TrainerCard from './components/TrainerCard';
import PokemonCard from './components/PokemonCard';

class App extends Component {
  render() {
    return (
      <main>
        <h1>Personal Pokédex</h1>
        <TrainerCard />
        <PokemonCard />
      </main>
    );
  }
}

export default App;
