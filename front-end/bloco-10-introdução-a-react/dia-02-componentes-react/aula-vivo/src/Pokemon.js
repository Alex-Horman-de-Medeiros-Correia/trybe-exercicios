import React from 'react';
import Pokedex from './Pokedex';
import Pokemons from './Pokemons';


class Pokemon extends React.Component {
    render() {

        /* const { pokemon: { name, type, averageWeight, image, moreInfo } } = this.props; */

        return (
            <div>
                {Pokemons.map((element) => <Pokedex  name={element.name} type={element.type} averageWeight={element.averageWeight} image={element.image} moreInfo={element.moreInfo} />)}
            </div>
        )
    }
}

export default Pokemon;