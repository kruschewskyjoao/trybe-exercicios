import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    return (
      <div>
        {data.map(each => <Pokemon key={each.id} pokemon={each} />)}
      </div>
    )
  }
}

export default Pokedex
