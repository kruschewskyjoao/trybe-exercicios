import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <Pokedex data={pokemons}/>
    </div>
  );
}

export default App;
