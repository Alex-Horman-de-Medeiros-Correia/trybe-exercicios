import React from 'react';
import './App.css';
import FormToDo from './Components/FormToDo';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      taskList: [],
    }

    this.saveTask = this.saveTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  saveTask(event, task) {

    event.preventDefault(); //o event.preventDefault() possibilita que o evento onSubmit não recarregue a página, fazendo meu estado perder a modificação.

    this.setState((tarefaAnterior) => ({
      taskList: [ ...tarefaAnterior.taskList, task ],
    }))
  }

  removeTask(task) {
    const {taskList} = this.state;

    this.setState({
      taskList: taskList.filter((element) => element !== task),
    })
  }



  render() {

    const {taskList} = this.state;

    return (
      <div>
        <h1>Projeto To Do List</h1>
        <FormToDo saveTask={this.saveTask} />

        <section>
          {taskList.map((element, index) => (
            <div key={element + index} className='listao' >
              <h3 className='lista' > {element} </h3>
              <button className='bot' onClick={() => this.removeTask(element)} > X </button>
            </div>
          ))}
        </section>
        
      </div>
    )
  }
}


export default App;
