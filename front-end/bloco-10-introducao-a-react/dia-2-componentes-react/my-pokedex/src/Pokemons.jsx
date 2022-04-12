import React from 'react';
import './pokeStyle.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight:{ value, measurementUnit },image } = this.props.pokemon
    return (
      <div className='eachPokemonBox'>
        <h4>{ name }</h4>
        <p>{ type }</p>
        <img src={ image } alt={name} ></img>
        <p>{`${value} ${measurementUnit}`}</p>
      </div>
    )
  }
}

export default Pokemon;
