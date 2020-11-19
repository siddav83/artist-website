import React from 'react';

const PokemonCard = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bulbasaur</td>
          <td>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
          </td>
        </tr>
        <tr>
          <td>Charmander</td>
          <td>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" />
          </td>
        </tr>
        <tr>
          <td>Squirtle</td>
          <td>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" />
          </td>
        </tr>
        <tr>
          <td>Caterpie</td>
          <td>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" />
          </td>
        </tr>
        <tr>
          <td>Pidgey</td>
          <td>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png" />
          </td>
        </tr>
        <tr>
          <td>Pikachu</td>
          <td>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PokemonCard;
