import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const arrTarefas = ['Estudar', 'Malhar', 'Comer', 'Dormir']

class Tasks extends React.Component {
  render() {
    return arrTarefas.map((each) => Task(each))
  }
}

export default Tasks;
