import React from 'react';
import Pokedex from './Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="App" >
        <Pokedex />
      </main>
    )
  }
}

export default App;
