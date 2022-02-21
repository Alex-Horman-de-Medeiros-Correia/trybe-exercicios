// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import List from './List';
import UserInfo from './UserInfo';


class App extends React.Component {
  render() {

    const userInfo = [{
      id: 2,
      age: 31,
      name: 'Alex Horman',
      email: 'alex@gmail.com',
    },
    {
      id: 3,
      age: 28,
      name: 'Andre Horman',
      email: 'andre@gmail.com',
    },
    {
      id: 4,
      age: 23,
      name: 'Arthur Horman',
      email: 'arthur@gmail.com',
    }]


    return (
      <div>
        <h2>Lista de Compras</h2>
        <ul>
          <List/>
        </ul>
        <h2>Infos da Pessoa</h2>
        <ol>
        {userInfo.map((element) => <UserInfo key={element.id} user={element}/>)}
        </ol>
      </div>
    )
  }
}



export default App;
