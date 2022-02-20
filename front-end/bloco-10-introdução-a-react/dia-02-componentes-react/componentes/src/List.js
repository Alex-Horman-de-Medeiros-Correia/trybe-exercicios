import React from 'react';

class List extends React.Component {
    render() {

        const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

        return (
            shoppingList.map((element, index) => {
               return <li key={index} > {element} </li>
            })

            
        )
    }
}

export default List;