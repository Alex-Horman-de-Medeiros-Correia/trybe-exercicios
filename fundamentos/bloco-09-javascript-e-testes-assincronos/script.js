//javascript assincrono e callbacks

//operações assincronas -

/* setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
  }, 2000);
  
  console.log('1 - Receber roda'); // 1 - Receber roda
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
  console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro */

  /* const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); */


/* const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 7000); //7000 milisegundos para então os argumentos passados ao setTimeout entrarem em cena, pois setTimeout é uma função de caráter assincrono, possibilitando os demais console.log serem executados antes que o mesmo o seja.
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 7000); //retorna [2, 3, 1] pois os argumentos 2 e 3 foram passados logo de início, sem precisar esperar pelos 7000 milissegundos. Após passados 7000 milissegundos, o setTimeout é executado finalmente, atribuindo ao array numbers o seu próprio argumento, no caso, 1, e, portanto, retornando [2, 3, 1]. */


/* const myExample = setTimeout(meusParabens, 7000);

function meusParabens() {
    document.querySelector('#insere').innerHTML = 'Parabéns! Atrasado 7 segundos, mas beleza ^^';
}

function botao() {
    clearTimeout(myExample);
} */

//callbacks -

/* const despesas = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const renda = 1000;

  const despesaMensal = (renda, despesas, callback) => {

    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };

  const somaDespesas = (despesas) => {
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
  };
  
  // acc é a sigla para accumulator (acumulador)
  // curr é a sigla para current (valor atual)
  
  despesaMensal(renda, despesas, somaDespesas); */


  /* const myFunction = (param) => {
      console.log(param);
  }

  const funSoma = (num, num2, callback) => {
  let soma = num + num2;
  callback(soma);
  }

    funSoma(2, 3, myFunction); */


    /* const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Insira o retorno da função `getUser`
  return callback(userToReturn);
};

console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"



/* const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo */


//LIDANDO COM ERROS EM OPERAÇÕES ASSINCRONAS -

/* const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, callback) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
      callback(errorMessage);
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage); */



//SETUP E TEARDOWN - 

//Quando você está lidando com um ambiente de testes dentro do jest, é importante saber que existem 3 ciclos, sendo possível utilizar cada um deles para ajudar a configurar e realizar seus testes.

//Até esse momento, você viu como realizar os testes utilizando o Jest, que é apenas um dos ciclos possíveis. Vamos entender, a seguir, quais são os outros dois.

//Setup - é o primeiro ciclo. Ele ocorre antes dos testes serem executados. É uma fase inicial que você pode definir algumas configurações.

//Testes - é considerado o segundo ciclo, ou seja, o momento em que ocorrem os testes. O ciclo em que foi trabalhado nos blocos anteriores.

//Teardown - é o terceiro ciclo. Uma fase que ocorre após os testes serem executados.

//Esses ciclos existem, em teoria, para evitar perder tempo com certas coisas. Por exemplo, caso tenhamos um array com alguns elementos e, em paralelo, dezenas de funções interagindo com o array. Caso queiramos introduzir novos testes, teriamos que saber como o array ficou após a sua ultima iteração com as funções (a depender do que pede o último teste), no entanto, isso poderia levar muito tempo e ocasionar um desgaste desnecessário, sendo assim, o ciclo 1 e o ciclo 3 são aplicados, SETUP e TEARDOWN, respectivamente.

/* setTimeout(() => console.log('7 segundos depois, aqui estou!'), 7000); */

/* const preparaCafe = () => {
  setTimeout(() => {
    console.log('1 - café na mesa');
  }, Math.random() * 6000);
};

const preparaTorrada = (callback) => {
  setTimeout(() => {
    console.log('2 - torrada no prato');
    callback();
  }, Math.random() * 6000);
};

console.log('início!');


preparaTorrada(preparaCafe);

console.log('FIM!'); */


/* const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C */


/* const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
}


getPlanet(); */


/* const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  setTimeout(() => {
    console.log(`A temperatura em Marte se encontra por volta de ${getMarsTemperature()} graus`);
  }, messageDelay);
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo */



/* const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) => {
  setTimeout(() => {
    callback(getMarsTemperature());
  }, messageDelay);
}

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo */




/* const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback, callbackTwo) => {
  if (messageDelay() <= 3000) {
    setTimeout(() => {
      callback(getMarsTemperature());
    }, messageDelay());
  } else {
    setTimeout(() => {
      callbackTwo('Robot is busy');
    }, messageDelay());
  }
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError); */


