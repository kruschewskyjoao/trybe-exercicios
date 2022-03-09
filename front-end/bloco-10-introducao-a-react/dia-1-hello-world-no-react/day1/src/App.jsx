import HelloWorld from './helloword';
import Component from './Component';
import './App.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Component local={'trybe'}/>
      <p>alo</p>
    </div>
  );
}

export default App;
