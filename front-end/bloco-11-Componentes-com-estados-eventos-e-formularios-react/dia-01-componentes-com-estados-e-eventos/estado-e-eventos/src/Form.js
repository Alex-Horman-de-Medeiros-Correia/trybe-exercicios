import React from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

class Form extends React.Component {

    constructor() {
        super()

        this.state = {
            password: '',
            eyePassword: true,
        }

        this.handlePassword = this.handlePassword.bind(this);
        this.eyeClick = this.eyeClick.bind(this);
    }


    handlePassword(event) {
        this.setState(
            {
            password: event.target.value,
        },
        () => console.log(this.state.password))
    }

    eyeClick() {
        this.setState((estadoAnterior) => ({
            eyePassword: !estadoAnterior.eyePassword,
        }))
    }


    render() {

        const {eyePassword} = this.state;

        return (
            <div>
                <label>Password</label>
                    <input type={eyePassword ? 'text' : 'password'}  onChange={this.handlePassword} />
                
                    {eyePassword ? <FaEye className='eye' onClick={this.eyeClick} /> : <FaEyeSlash className='eye' onClick={this.eyeClick} />}
            </div>
        )
    }
}

export default Form;