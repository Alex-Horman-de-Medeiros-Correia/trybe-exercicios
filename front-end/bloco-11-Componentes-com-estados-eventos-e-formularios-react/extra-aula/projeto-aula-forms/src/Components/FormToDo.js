
import React, {Component} from 'react';

class FormToDo extends Component {
    constructor() {
        super();

        this.state = {
            ToDo: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }



    handleChange({target: {value, name}}) {
        this.setState({
            [name]: value,
        })
    }


    render() {

        const {saveTask} = this.props;
        const {ToDo} = this.state;

        return (
            <form  className='formu' onSubmit={ (event) => saveTask(event, ToDo)} >
                <label>
                    Escreva aqui...
                    <br/>
                    <input type='text' 
                        name='ToDo' 
                        onChange={this.handleChange} 
                        value={ToDo}
                    />
                </label>

                <button className='bot2' type='submit' >Salvar Aqui</button>
            </form>
        )
    }
}

export default FormToDo;