import React from "react";


class Error extends React.Component {

    alerta() {
        alert('Digite um url válido!');
    }

    render() {
        return (
            <div>
                <h1>Página NÃO encontrada!</h1>
                { this.alerta }
            </div>
        )
    }
}

export default Error;