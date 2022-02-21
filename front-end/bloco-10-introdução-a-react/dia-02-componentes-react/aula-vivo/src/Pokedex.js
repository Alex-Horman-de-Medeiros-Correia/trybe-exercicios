import React from "react";

class Pokedex extends React.Component {
    render() {

        const { Pokemons: { name, type, averageWeight, image, moreInfo } } = this.props;

        return (
            <section>
                <div>
                    <img src={image} alt={`pokemon ${name}`} />
                </div>

                <div>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`} </p>
                </div>

                <div>
                    <p>
                        {moreInfo}
                    </p>
                </div>
            </section>

        )
    }
}

export default Pokedex;