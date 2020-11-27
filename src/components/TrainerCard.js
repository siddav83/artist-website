import React, { Component } from 'react';

class TrainerCard extends Component {
  state = {
    trainerName: 'Michael',
    pokemonCaught: 2,
  };

  increasePokemonCount = () => {
    this.setState((prevState) => ({
      pokemonCaught: prevState.pokemonCaught + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>{this.state.trainerName}</h2>
        <h3>Pokemon Trainer</h3>
        <h3>Kanto Region</h3>
        <h3>Pokemon Caught: {this.state.pokemonCaught}</h3>
        <button onClick={this.increasePokemonCount}>
          I caught another one!
        </button>
      </div>
    );
  }
}

export default TrainerCard;
