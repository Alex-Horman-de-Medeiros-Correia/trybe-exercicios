import React from "react";
import { Link } from "react-router-dom";



class Agenda extends React.Component {
    render() {

        const { allAgenda } = this.props;

        return (
            <div>
                <h1>Agenda</h1>

                <ol>
                    
                    { allAgenda.map((element) => 
                    <li key={element.id} >
                        <Link to={element.id} > {element.name} </Link> 
                    </li>
                    ) }
                    
                </ol>
            </div>
        )
    }
}

export default Agenda;