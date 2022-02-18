import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

  const list = (value) => {
      return (
          <li key={value} className="card" >
              <p> O conteúdo é: {value.conteudo} </p>
              <p> Status: {value.status} </p>
              <p> Bloco: {value.bloco} </p>
          </li>
      )
  }


class Content extends React.Component {
    render() {
        return (
            <ul> {conteudos.map((element) => list(element))} </ul>
        )
    }
}

export default Content;