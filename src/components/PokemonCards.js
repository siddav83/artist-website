import React, { useState } from 'react';

const PokemonCards = () => {
  const [pokemon, setPokemon] = useState([
    { name: 'Bulbasaur', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" },
    { name: 'Charmander', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" },
    { name: 'Squirtle', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" },
    { name: 'Caterpie', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" },
    { name: 'Pidgey', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png"},
    { name: 'Pikachu', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"}
  ])

  const renderRows = () => {
    return pokemon.map(p => <tr><td>{p.name}</td><td><img src={p.img} /></td></tr>)
  }

  return (
    <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  );
};

export default PokemonCards;
