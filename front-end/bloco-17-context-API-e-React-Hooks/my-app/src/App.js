import React, { useState } from 'react';
import Lista from './Lista';

function App() {
  const [task, setTask] = useState('');

  const [list, setList] = useState([]);


  const handleTask = ({ target: { value } }) => {
    setTask(value);
  }

  const handleList = () => {
    
    setList([ ...list, task ])
    setTask('')
  }

  return (
    <div>
      Escrever Tarefa!
      <input type="text" name="task" value={task} onChange={ handleTask }/>
      <button type="button" name='task' value={task} onClick={ handleList }>
        add Tarefa
      </button>
      <Lista list={ list } />
    </div>
  )
}

export default App;
