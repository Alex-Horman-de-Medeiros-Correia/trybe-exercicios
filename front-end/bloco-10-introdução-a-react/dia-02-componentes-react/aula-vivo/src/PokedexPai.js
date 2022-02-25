import React from 'react';
import Pokedex from './Pokedex';

class PokedexPai extends React.Component {

    constructor() {
        super()

        this.state = {
            filtro: '',
        }

        this.funcInput = this.funcInput.bind(this);
    }


    funcInput(event) {
        this.setState({
            filtro: event.target.value,
        })
    }




    render() {

        const {pokemon} = this.props;
        const {filtro} = this.state;

        return (
            <>
                <input type='text' onChange={this.funcInput}  className='filtro' placeholder='  Filtre um ou mais Pokemons...' />

                <div className="pokedex" >
                    {pokemon.filter((filt) => filt.name.includes(filtro))
                    .map((element) => <Pokedex  key={element.id} pokemon={element} />)}
                </div>
            </>
        )
    }
}

export default PokedexPai;