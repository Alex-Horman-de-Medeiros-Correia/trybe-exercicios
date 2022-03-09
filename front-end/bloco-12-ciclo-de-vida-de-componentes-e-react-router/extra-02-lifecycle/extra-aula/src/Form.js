import React from "react";

class Form extends React.Component {
    constructor() {
        super()

        this.randomAtualize = this.randomAtualize.bind(this);
    }

    randomAtualize() {
        window.location.reload();
    }

    

    render() {

        const { name, picture, email, dob } = this.props;

        return (
            <div>
                <h2> {name} </h2>
                <img src={picture} alt={name} />
                <p>
                    {email}
                </p>
                <h4> {dob} </h4>

                <button type="button" onClick={this.randomAtualize} >
                    Atualize!
                </button>
            </div>
        )
    }
}

export default Form;