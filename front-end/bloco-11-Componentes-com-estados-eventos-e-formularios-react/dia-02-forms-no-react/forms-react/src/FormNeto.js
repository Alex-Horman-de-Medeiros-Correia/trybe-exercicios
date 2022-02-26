import React from 'react';
import FormBisNeto from './FormBisNeto';

class FormNeto extends React.Component {
    render() {

        const {propCaracter, propArquivo, propModulo, propEnvio} = this.props;
        const {handles, handleEnvio} = this.props;


        return (
            <div>
            <fieldset className="form" >
                <legend>Outras Infos</legend>

                <label>
                    Você se considera uma boa pessoa?
                    <input name="caracter" type='checkbox' value={propCaracter} onChange={handles} />

                    {propCaracter ? '' : 'Só aceitamos BOAS PESSOAS!'}
                </label>

                <label>
                    <input  name="arquivo" type='file' value={propArquivo} onChange={handles} />
                </label>

                <label>
                    Qual o seu módulo favorito?
                    <br/>
                    <select name="favModulo" value={propModulo} onChange={handles} >
                        <option value='fundamentos' >Fundamentos</option>
                        <option value='front-end' >Front-End</option>
                        <option value='back-end' >Back-End</option>
                        <option value='ciência da computação' >Ciência da Computação</option>
                    </select>
                </label>

            </fieldset>

            <FormBisNeto handleEnvio={handleEnvio} propEnvio={propEnvio} />
            </div>
        )
    }
}

export default FormNeto;