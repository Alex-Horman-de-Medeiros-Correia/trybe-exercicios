import React from 'react';

class Image extends React.Component {
    render() {
        return (
            <img src={this.props.imagem} alt={this.props.alternativeText} />
        )
    }
}

export default Image;