import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Content />
          <Header />
          <Sidebar />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
