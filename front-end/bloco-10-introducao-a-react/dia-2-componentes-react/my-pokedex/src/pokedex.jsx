import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemons';

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon }/>)
    )
  }
}

export default Pokedex;
