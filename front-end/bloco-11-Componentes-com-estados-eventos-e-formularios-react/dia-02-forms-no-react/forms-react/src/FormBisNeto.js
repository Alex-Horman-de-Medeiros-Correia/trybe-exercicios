import React from "react";

class FormBisNeto extends React.Component {
    render() {

        const {handleEnvio, propEnvio} = this.props;

        return (
            <fieldset>
                <legend>Clique para Enviar!</legend>
                <button name="envio"  value={propEnvio} onClick={handleEnvio} >Aqui, meu Caro</button>
            </fieldset>
        )
    }
}


export default FormBisNeto;