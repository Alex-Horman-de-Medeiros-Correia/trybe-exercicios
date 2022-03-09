import React from "react";
import Form from "./Form";


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      info: '',
      /* name: '',
      picture: '',
      email: '',
      dob: '', */
    }
    
  }

  componentDidMount() {
    try {
      fetch('https://api.randomuser.me/')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            info: data.results,
          })
        })
    } catch(error) {
      console.log('error');
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    
    if(nextState.info[0].dob.age >= 50) {
        return false;
        
    }
    return true;
  }
  

  render() {
    const { info } = this.state;

    if(!info) {
      return <p>loading...</p>
    }

    return (
      <div>
        { info.map(({name, picture, email, dob}) => 
        <Form name={`${name.first} ${name.last}`} 
        picture={picture.medium}
        email={email}
        dob={dob.age}
        /> ) }
      </div>
    );

  }
}

export default App;
