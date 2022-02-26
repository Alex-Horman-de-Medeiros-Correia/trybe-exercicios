import React from "react";
import FormsFilho from "./FormsFilho";


class Forms extends React.Component {

    constructor() {
        super()

        this.state = {
            apelido: '',
            nomeCompleto: '',
            email: '',
            idade: 0,
            caracter: true,
            arquivo: '',
            favModulo: '',
            error: true,
            envio: true,
        }

        this.handleAll = this.handleAll.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleEnvio = this.handleEnvio.bind(this);
    }


    handleEnvio(event) {
        this.setState({
            envio: event.target.value,
        })
    }


    handleButton({target}) {
        const {name} = target;

        this.setState({
            
            [name]: window.location.reload(),
        })
    }


    handleAll({target}) {
        const {name} = target;

        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        })
    }



    render() {

        const {apelido, nomeCompleto, email, idade, caracter, arquivo, favModulo, envio} = this.state;

        return (
            <div className="form" >
                <h2>Meu Formulário</h2>
                <FormsFilho  handleEnvio={this.handleEnvio} handleButton={this.handleButton} handleAll={this.handleAll} propApelido = {apelido} propEmail = {email} propIdade = {idade} propCompleto = {nomeCompleto} propCaracter = {caracter} propArquivo = {arquivo} propModulo = {favModulo} propEnvio={envio} />

            </div>
        )
    }
}

export default Forms;