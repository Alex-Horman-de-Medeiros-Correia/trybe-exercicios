/* const pizza = [
    { sabor: 'chocolate', preço: 15.40 },
    { sabor: 'calabresa', preço: 14.40 },
    { sabor: 'coco', preço: 16.40 },
    { sabor: 'marguerita', preço: 20.40 },
];

for (let index = 0; index < pizza.length; index += 1) {
    console.log(`a pizza de ${pizza[index].sabor} custa ${pizza[index].preço}`);
};

pizza.forEach( (comida) => { //pega cada elemento do array.
    console.log(`a pizza de sabor ${comida.sabor} custa exatamente R$ ${comida.preço}`);
} )

for (let index of pizza) {
    console.log(`bom, o sabor da pizza de ${index.sabor} vale o custo de R$ ${index.preço}`);
} */  

//HOF - HIGHER ORDER FUNCTIONS - 

//FIRST-CLASS-FUNCTIONS- JAVASCRIPT PERMITE ATRIBUIR FUNÇÕES A VARIÁVEIS, CHAMÁ-LAS DENTRO DE OUTRAS FUNÇÕES, PASSADAS À ELAS CERTOS ARGUMENTOS DISPONÍVEIS PELA PRÓPRIA LINGUAGEM.

/* function sum (number1, number2) {
    return number1 + number2;
}

const sumClamor = sum;
console.log(sumClamor(1, 2)); */

/* const sum = (number1, number2) => {
    return number1 + number2;
}
console.log(sum(2, 3)); */

/* const message = () => {
    return 'hello, tryber!';
}

const messagePassed = (callback) => {
    console.log(callback());
}

messagePassed(message); */


/* const funcao1 = (number1) => {
    return (number2) => number1 * number2;
}

const funcao2 = funcao1(5);

console.log(funcao2(2)); */

/* const botton = document.querySelector("#botao");
const paragra = document.querySelector("#paragrafo");

let contador = 0;

const funcaoChamada = () => {
    contador += 1;
    paragra.innerHTML = contador;
}

botton.addEventListener("click", funcaoChamada); */


//ESTRUTURANDO UMA HOF - HIGHER ORDER FUNCTIONS

/* const repet = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
}
repet(5, console.group); */

/* const repet = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
}
repet(2, (number) => {
    if (number * 2 === 0) {
        console.log(number, "is even");
    }
}) */

/* const div = (div1, div2) => {
    return div1 / div2;
}
console.log(div(2,2)); */

/* const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(2, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  }); */


  /* const div = (div1, div2) => {
    return div1 / div2;
}
console.log(div(1,2)); */

/* const repet = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
}

let par = (number) => {
    if (number % 2 === 0) {
        console.log(number, "é par");
    }
}

let impar = (number) => {
    if ((number % 2) > 0) {
        console.log(number, "é impar");
    }
}

repet(5, par);
repet(5, impar); */

//essa acima é uma higher order function, pois seu parametro 'action' recebeu como argumento duas funções, uma em cada exemplo, uma em cada teste. Uma função que recebe outra como parametro é uma higher order function e o parametro que recebeu uma função como argumento é uma CALLBACK.

/* const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator()); */

 /*  const sum = (number1, number2) => number1 + number2;

  const mult = (number1, number2) => number1 * number2;

  const calculator = (agrupar) => agrupar(2, 3);

  console.log(calculator(sum));
  console.log(calculator(mult)); */

/*   const frase = () => "acordando";

  const frase2 = () => "bora tomar café";

  const frase3 = () => "partiu dormir!";

  const doingThings = (geral) => geral();

  console.log(doingThings(frase)); */

  /* const generator = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return { nome: nomeCompleto, email: `${email}@gmail.com` }
};  

  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Gerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(generator)); */

  /* const sorteio = (myNumber, number) => myNumber === number;

  const numberGenerator = (myNumber, callback) => {
      const number = Math.floor(( Math.random() * 5 ) +1 );

      return callback(myNumber, number) ? 'você acertou, parabens!' : 'você errou, tente de novo!';
  }


  console.log(numberGenerator(3, sorteio)); */


  /* const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

  const comparacao = (arrayCerto, arrayEstudante) => {
      if (arrayCerto === arrayEstudante) {
          return 1;
      } else if (arrayEstudante === 'N.A') {
          return 0;
      }
      return -0.5;
  }

  const corpo = (arrayCerto, arrayEstudante, comparacao) => {
      let contador = 0;

      for (let index = 0; index < arrayCerto.length; index += 1) {
          const resultado = comparacao(arrayCerto[index], arrayEstudante[index]);

          contador += resultado;
      }
      return `você fez ${contador} pontos!`;
  }

  console.log(corpo(RIGHT_ANSWERS, STUDENT_ANSWERS, comparacao)); */

   /* const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ]; */

  /* const funcao = () => {
      for (let index = 0; index < students.length; index += 1) {
          let estudante = students[index];

          if(estudante.grade >= 60) {
              estudante.approved = "aprovado";
          } else {
              estudante.approved = "reprovado";
          }
      }
  }

  /* funcao(); 
  const cadaUm = () => {
   students.forEach ( (studant, index) => {
    if (studant.grade >= 60) {
        students[index].approved = "aprovado";
    } else {
        students[index].approved = "reprovado";
    }
  })
}
  cadaUm();

  console.log(students); */


  /* const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100]; */

  /* let primeiroDivisivoPor5 = [''];

  for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] % 5 === 0) {
          primeiroDivisivoPor5 += numbers[index];

        
      }
  }
  console.log(primeiroDivisivoPor5); */

  /* const divisivoPor5 = numbers.find ( (number) => number % 5 === 0 );

  console.log(divisivoPor5); */


  /* const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

  arrayOfValues.forEach( (element, elementPosition, intireArray) => {
    console.log('cada elemento do array: ', element);
    console.log('posição do elemento: ', elementPosition);
    console.log('o array percorrido: ', intireArray);
  }) */

  /* const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const multiplyFor2 = (element) => {
      console.log(`${element} * 2 é: ${element * 2}`);
  }

  numbers.forEach(multiplyFor2); */

  /* const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

  const tudoMaiuscula = (element, index) => {
      names[index] = element.toUpperCase();
  }

  names.forEach(tudoMaiuscula);
  console.log(names); */

  /* const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui
  emailListInData.forEach( (element) => {
    showEmailList(element);
  }) */

  /* const numbers = [19, 21, 30, 3, 45, 22, 15];

  const parr = numbers.find ( (element) => {
    return element % 2 === 0;
  })

  console.log(`o primeiro elemento par é ${parr}`); */

  /* const numbers = [19, 21, 30, 3, 45, 22, 15];

  const div = numbers.find( (element) => {
    return element % 3 === 0 && element % 5 === 0;
  })
  console.log(`o primeiro numero divisível por 3 e 5 é ${div}`); */

  /* const names = ['João', 'Irene', 'Fernando', 'Maria'];

  const fivewords = names. find ( (element) => {
    return element.length === 5;
  })
  console.log(fivewords); */

  /* const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]

  const ident = musicas.find ( (element) => {
    return element.id === '31031685';
  })
  console.log(ident); */

  /* let numbers = [2, 4, 6, 8, 12, 14, 16, 17];

  const botao = document.querySelector("#botao");
  const div = document.querySelector("#resposta");

  
  function chamada() {
    numbers.some( (transformacao) => {
        console.log(transformacao);
        numbers = numbers.filter( (numero) => numero !== transformacao);

        if (transformacao % 2 !== 0) {
            return div.innerHTML = "existe pelo menos um numero impar";
        } else {
            return div.innerHTML = "todos os numeros são par";
        }
    })
}
  

  botao.addEventListener("click", chamada); */


  /* const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };

  const aproveOrNot = (element) => (
      Object.values(element).every( (grade) => grade === 'Aprovado')
  )

  console.log(aproveOrNot(grades)); */

  /* const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  const maioridade = people.every( (element) => element.age >= 18);

  //CLARO QUE DÁ FALSE! EVERY VERIFICA SE TODOS OS ELEMENTOS ATENDEM A UMA CONDIÇÃO!

  console.log(maioridade); */


  /* const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return arr.every( (element) => element === minimumAge);
  }
  
  console.log(verifyAges(people, 18)); */


  /* const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  food.sort();
  numbers.sort((a, b) => b - a);

  //com a formula acima, sort ordena de forma crescente. De forma decrescente se coloca: numbers.sort( (a, b) => b - a)

  console.log(food);
  console.log(numbers); */


  /* const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  people.sort( (a, b) => a.age - b.age);
  
  console.log(people); */


  /* const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  people.sort( (a, b) => b.age - a.age);
  
  console.log(people); */


  