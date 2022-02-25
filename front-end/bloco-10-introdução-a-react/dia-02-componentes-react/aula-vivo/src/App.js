import React from 'react';
import Data from './Data';
import PokedexPai from './PokedexPai';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <main className='App' >
        <h1>Pokedex</h1>
        <PokedexPai pokemon={Data} />
      </main>
    )
  }
}

export default App;
