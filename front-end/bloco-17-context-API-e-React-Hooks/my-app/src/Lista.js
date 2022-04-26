import React from "react";

function Lista({ list }) {
        return (
            <div>
                <h2> Lista de Tarefas: </h2>
                { list.map((element, index) => 
                   <h3 key={index} > { element } </h3> 
                )}
            </div>
        )
    }

export default Lista;