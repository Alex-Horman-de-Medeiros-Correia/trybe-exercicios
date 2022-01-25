/* const animes = ['dbz', 'cdz', 'yu yu hakusho', 'naruto'];
const personagens = ['goku', 'seiya', 'yusuke', 'naruto'];

const listaOtaku = ['só as animações: ', ...animes, 'só os protagonistas: ', ...personagens];

console.log(listaOtaku); */

//spread operator - operador spread com objetos:

/* const skills = {
    fire: 'bola de fogo',
    ice: 'golpe aurora',
    light: 'tesouro do céu',
}

const persona = {
    name: 'Spread, o destemido',
    age: '320',
    city: 'reino de malgraven',
}

const fichaRpg = {
    ...persona,
    ...skills,
    golpeSecreto: 'morte rubra',
}

console.log(fichaRpg);
console.log(skills);
console.log(persona); */


/* const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const meses = ['todos os meses do ano: ', ...summer, ...fall, ...winter, ...spring];

console.log(meses); */


//operador spread como argumento para funções: 

/* const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);

const info = [87, 1.75];

console.log(imc(...info)); */


/* const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers)); */

/* const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };

  const ficha = {
      ...people,
      ...about,
  }

  console.log(ficha); */


  // Faça uma lista com as suas frutas favoritas
/* const specialFruit = ['maçã', 'banana', 'pessego'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['caramelo', 'chocolate', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

//spread operator funciona com arrays, retornando um array novo a partir de outros originais que se mantêm inalteráveis.

console.log(fruitSalad(specialFruit, additionalItens)); */



//PARÂMETRO REST - 

/* function quantosParams(...argum) {
    console.log('parametros: ', argum);
    return `você passou ${argum.length} para a função`;
}

console.log(quantosParams(1, 2, 3)); //vai nos retornar um array [1, 2, 3];
console.log(quantosParams('string', null, [1, 2, 3], {})); //vai retornar 4 parametros conforme escrito */


/* const sum = (...rest) => {
    console.log(rest);
    return rest.reduce( (acumulador, valorCorrente) => { //o rest transforma os argumentos passados em array para que, desta forma, possa ser usado a hof reduce, pois reduce só itera com arrays.
        return acumulador + valorCorrente;
    }, 0)
}
console.log(sum(34, 22, 56, 100)); */


//OBJECT DESTRUCTURING - desestruturação de objeto

/* const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  console.log(product.name, product.price, product.seller); //retorna os valores de cada chave do objeto apenas acessando cada propriedade ao se utilizar da notação por ponto. */


  /* const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  const {name, seller, price} = product;

  console.log(name, seller, price); */


  // definindo o objeto
/* const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };

  const {name, age, homeWorld: {name: planetName}, description: {jedi}} = character;

  console.log(`o protagonista ${name} possui ${age} anos, e antigamente morava em ${planetName}. Sim, em carne e osso, ele é um... ${jedi ? 'jedi, astuto na força' : 'naaamm... ele não é um jedi!'}`); */



/* const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };

  const {workDays, weekend} = daysOfWeek;

  console.log(workDays);
  console.log(weekend);

  const weekDays = [...workDays, ...weekend];

  console.log(weekDays); */


  /* const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };

  const {a: estudent, b: turma, c: bestSkill, d: bestFriend} = student; //assim se pode re-estruturar o nome das propriedades.

  console.log(estudent);
  console.log(turma);
  console.log(bestSkill);
  console.log(bestFriend); */


  /* const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  const pegandoValores = ({name, price, seller}) => {
      return `O produto ${name}, apenas hoje, está custando ${price}! Só aqui, na ${seller}!`;
  }

  console.log(pegandoValores(product)); */



/* const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };


  
  
  const junta = {
      ...user,
      ...jobInfos,
    };

  console.log(junta);

  //e por fim uma função com a desestruturação de objetos.

  const frase = ({name, age, nationality, profession}) => {
      return `Hi, my name is ${name} and i have ${age} years. How to americans says, i'm ${nationality}. I'm working with ${profession}.`;
  }

  console.log(frase(junta)); */


  //ARRAY DESTRUCTURING

  /* const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

  /* const firstCountry = arrayCountries[0];

  console.log(firstCountry); 

  const [um, dois, tres, quatro] = arrayCountries;

  console.log(um); */


  /* const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [um, dois] = saudacoes;

console.log(um); */


/* let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo */


/* let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo */


//DEFAULT DESTRUCTURING - pode atribuir um valor padrão a uma propriedade inexistente.

/* const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'brasileiro'} = person;

  console.log(nationality); */


  /* const numeros = [1.3, 2.4, 4.6];

  const [a, b, c, d = 0] = numeros; //atráves do default destructuring nós atribuimos um valor a um elemento indefinido.

  console.log(d); */


  /* const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); */



//OBJECT PROPERTY SHORTHAND

//Jeito normal >>

/* const usuario = (name, age, email) => {
    return {
        name: name,
        age: age,
        email: email,
    }
}

console.log(usuario('alex', 31, 'alexhorman1990@gmail.com')); */


/* const usuario = (name, age, email) => {
    return {
        name,
        age,
        email,
    };
};

console.log(usuario('alex', 31, 'alexhorman1990@gmail.com')); //object property shorthand te permite ser mais conciso e escrever dentro do objeto apenas os respectivos parametros da função. O javascript entende que deve criar propriedades/chaves com o mesmo nome dos parametros da função. */

/* 
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542)); */


  //DEFAULT PARAMETERS -

  /* const greeting = (user) => {
      const newGreeting = typeof user === 'undefined' ? 'Alex' : user;
      console.log(`Welcome ${newGreeting}!`);
  };

greeting(); // Welcome undefined! */

/* const greeting = (user = 'ALex') => {
    console.log(`Welcome ${user}!`);
};

greeting(); // Welcome undefined! */

/* const multiply = (number, value = 2) => {
    // Escreva aqui a sua função
    return number * value;
  };
  
  console.log(multiply(8)); */