import React from "react";
import FormNeto from "./FormNeto";

class FormsFilho extends React.Component {
    render() {

        const {propApelido, propEmail, propIdade, propCompleto, propCaracter, propArquivo, propModulo, propEnvio} = this.props;
        const {handleButton, handleAll, handleEnvio} = this.props;

        let error = undefined;
        if(propApelido.length > 80) {
            return error = <button name="error" className="botao"  onClick={handleButton} > Texto muito grande, clique para voltar! </button>;
        }

        let errorName = 'Nome deve ser maiusculo!';
        
        function emailValidation(email) {
            let validEmail = /\S+@\S+\.\S+/;

            return validEmail.test(email);
        }

        return (
            <form> 
            <fieldset className="form" >

                <legend>Infos Pessoais</legend>

                <label>
                    Diga qual o seu apelido...
                    <br/>
                    <textarea name="apelido"  value={propApelido} onChange={handleAll} />

                    {error ? error : ''}
                </label>

                <label>
                    Nome Completo
                    <br/>
                    <input name="nomeCompleto" type='text' value={propCompleto} onChange={handleAll} />
                    <br/>
                    {propCompleto !== propCompleto.toUpperCase() ? errorName : ''}
                </label>

                <label>
                    Email
                    <br/>
                    <input name="email" type='email' value={propEmail} onChange={handleAll} />

                    {emailValidation(propEmail)}
                </label>

                <label>
                    Idade
                    <br/>
                    <input name="idade" type='number' value={propIdade} onChange={handleAll} />
                </label>

            </fieldset>

            <FormNeto handleEnvio={handleEnvio} handles={handleAll} propCaracter={propCaracter} propArquivo={propArquivo} propModulo={propModulo}  propEnvio={propEnvio} />
            </form>
        )
    }
}

export default FormsFilho;