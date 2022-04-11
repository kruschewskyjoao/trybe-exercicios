import React from "react";

class Content extends React.Component {
  render() {

    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      <div>{conteudos.map((each, index) => {
        return <p key={index}>{`O conteúdo é: ${each.conteudo}
        Status: ${each.status}
        Bloco: ${each.bloco}`}</p>
      })}</div>
    )
  }
}

export default Content;
