import React from 'react';

class Component extends React.Component {
  render() {
    const { local } = this.props
    return (
      <h1>Meu nome é João Kruschewsky e eu estudo na {local}</h1>
    )
  }
}

export default Component;