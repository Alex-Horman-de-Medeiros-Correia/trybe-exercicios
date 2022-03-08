import React from "react";

class DadJoke extends React.Component {
    constructor() {
      super();
  
      this.saveJoke = this.saveJoke.bind(this);
      this.renderJokeElement = this.renderJokeElement.bind(this);
  
      this.state = {
        jokeObj: undefined,
        loading: true,
        storedJokes: [],
      }
    }
  
    async fetchJoke() {
      this.setState(
        {loading:true},

      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject,
      })
    })
    }
  
    componentDidMount() {
      this.fetchJoke();
    }
  
    saveJoke() {
      this.setState(({jokeObj, storedJokes}) => ({
        storedJokes: [ ...storedJokes, jokeObj ],
      }))
      //com spred operator eu vou espalhar o conteúdo do meu array, no caso, o estado storedJokes, juntamente com o conteúdo novo, o meu jokeObj, em um NOVO ARRAY!

      //Salvando a piada no array de piadas existentes
  

      this.fetchJoke();
    }
  
    renderJokeElement() {
      return (
        <div>
          <p>{this.state.jokeObj.joke}</p>
          <button type="button" onClick={this.saveJoke}>
            Salvar piada!
          </button>
        </div>
      );
    }
  
    render() {
      const { storedJokes, loading } = this.state;
      const loadingElement = <span>Loading...</span>;
  
      return (
        <div>
          <span>
            {storedJokes.map(({ id, joke, status }) => (<p key={id + status}>{joke}</p>))}
          </span>
  
        <span> { loading ? loadingElement : this.renderJokeElement() } </span>
  
        </div>
      );
    }
  }

  export default DadJoke;