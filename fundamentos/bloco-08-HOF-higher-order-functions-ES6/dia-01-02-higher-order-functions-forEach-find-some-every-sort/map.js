/* const listaEmail = [
    'alex@gmail.com',
    'lucas@gmail.com',
    'pedro@gmail.com',
    'janaina@gmail.com',
];

const fraseFinal = (usuario) => {
    console.log(`O dono do email ${usuario.email} obteve nota ${usuario.nota} no projeto!`);
}

let objetoComEmails;

objetoComEmails = listaEmail.map( (email) => {
    return {email: email, nota: 10};
})

objetoComEmails.forEach( (objeto) => fraseFinal(objeto)); */


/* const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];

  const arrayAbrigar = [];

  for (let index = 0; index < persons.length; index += 1) {
      arrayAbrigar.push(`${persons[index].firstName} ${persons[index].lastName}`);
  }

  console.log(arrayAbrigar); */



  /* const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];

  const names = persons.map( (element) => `${element.firstName} ${element.lastName}`);

  console.log(names); */


  const numbers = [1, 2, 3, 4, -5];

  /* const negativeNumbers = numbers.map( (number) => number > 0 ? number * (-1) : number);

  console.log(negativeNumbers); */

  /* const negativeNumbers = [];
  
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] > 0) {
            negativeNumbers.push(numbers[index] * (-1));
        } else {
            negativeNumbers.push(numbers[index]);
        }
    }

  console.log(negativeNumbers); */


  /* const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];


const tudoJunto = (produto, lista) => produto.map( (element, index) => ({ [element]: lista[index]}));


const produto = tudoJunto(products, prices);

console.log(produto); */


/* const numeros = [1, 2, 3, 4, 5, 6];

const retorno = numeros.map( (lelement) => lelement * 2);

console.log(retorno);

const abrigo = [];

numeros.forEach( (element) => {
    if (element % 2 === 0 && element < 5) {
        abrigo.push(element);
    }
})
console.log(abrigo); */



const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

  /* const nomeCompleto = [];

  for (let index = 0; index < estudantes.length; index += 1) {
      if (estudantes[index].turno === 'Manhã') {
          nomeCompleto.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`);
      }
  }
  console.log(nomeCompleto); */

  /* const nomesCompletos = estudantes.filter((element) => (element.turno === 'Manhã')).map( (estudant) => `${estudant.nome} ${estudant.sobrenome}`); 

  console.log(nomesCompletos); */

  //preciso começar a abidicar mais de outras coisas que gosto de fazer. Fazer atividade física, etc. Preciso continuar a seguir a risca a responsabilidade de estudar todos os dias. Preciso deixar de me alimentar mal.

  /* const funcao1 = (nome, lista) => {
      for (let index = 0; index < lista.length; index += 1) {
          if (lista[index].nome === nome) {
              return lista[index];
          }
      }
  }

  const funcao2 = (nome, lista) => {
      const pegarEstudante = funcao1(nome, lista);
      const abrigarWilson = [];

      for (let index = 0; index < pegarEstudante.materias.length; index += 1) {
          if (pegarEstudante.materias[index].nota >= 76) {
              abrigarWilson.push(`Passou em ${pegarEstudante.materias[index].name} com ${pegarEstudante.materias[index].nota} pontos!`);
          } else {
              abrigarWilson.push(`NÃO passou em ${pegarEstudante.materias[index].name} com ${pegarEstudante.materias[index].nota} pontos!`)
          }
      }
      return abrigarWilson;
  }

  console.log(funcao2('Wilson', estudantes)); */


  /* const funcao = (nome, lista) => {
      const retornar = lista.find( (element) => element.nome === nome );
      return retornar.materias.map( (materia) => (
          `${materia.name} ${(materia.nota >= 80) ? 'Aprovado!' : 'Reprovado'}`
      ));
  };


  console.log(funcao('Wilson', estudantes)); */