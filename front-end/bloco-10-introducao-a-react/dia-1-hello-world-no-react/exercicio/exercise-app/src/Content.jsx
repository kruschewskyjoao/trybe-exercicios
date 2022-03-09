import React from 'react';;

class Content extends React.Component {
  render() {
    const { conteudo, bloco, status } = this.props.conteudos
    return (
      <div>
        <p>{ `O conteúdo é ${conteudo},
        Status: ${status},
        Bloco: ${bloco}` }</p>
      </div>
    )
  }
}

export default Content
