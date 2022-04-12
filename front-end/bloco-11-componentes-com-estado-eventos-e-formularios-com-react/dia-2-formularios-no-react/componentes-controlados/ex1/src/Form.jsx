import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cidades: '',
      comidas: '',
      assuntoAtual: '',
      marcado: false,
    }
  }

  handleChange({target}) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
      <h1>Teste</h1>

      <label>Cidades
       <input name='cidades' type='text' value={this.state.cidades} onChange={this.handleChange}></input>
      </label>

      <label> Comidas:
        <input name='comidas' type='text' value={this.state.comidas} onChange={this.handleChange}></input>
      </label>

      <label> Assunto Atual:
        <select name='assuntoAtual' value={this.state.assuntoAtual} onChange={this.handleChange} >
          <option value='react'>React</option>
          <option value='html'>HTML</option>
          <option value='git'>GIT</option>
        </select>
      </label>

      <label> Marque:
        <input type="checkbox" name="marcado" id="" value={this.state.marcado} onChange={this.handleChange}/>
      </label>
    </div>
    )
  }
}

export default Form;
