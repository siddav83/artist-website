import React, { useState } from 'react';

const TrainerCard = () => {
  const [ trainerName, setTrainerName ] = useState('Michael');
  const [ pokemonCaught, setPokemonCaught ] = useState(2)


  const increasePokemonCount = () => setPokemonCaught(pokemonCaught + 1)

  return (
    <div>
      <h2>{trainerName}</h2>
      <h3>Pokemon Trainer</h3>
      <h3>Kanto Region</h3>
      <h3>Pokemon Caught: {pokemonCaught}</h3>
      <button onClick={increasePokemonCount}>
        I caught another one!
      </button>
    </div>
  );
}

export default TrainerCard;
