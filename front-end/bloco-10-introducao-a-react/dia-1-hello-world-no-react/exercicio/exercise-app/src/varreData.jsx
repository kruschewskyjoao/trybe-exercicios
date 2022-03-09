import React from 'react'; 
import conteudos from './data';
import Content from './Content';

class VarreData extends React.Component {
  render() {
    return conteudos.map((cont) => <Content key={ cont.conteudo } conteudos={ cont }/>)
  }
}

export default VarreData;
