/* const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke(); */

//fetch() significa BUSCAR! BUSCAR A URL para então implementá-la no código.

/* const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke(); */

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported

//O fetch que significa BUSCAR acaba por retornar, abrigar em seu escopo a requisição que é a URL. O PRIMEIRO .then() então retorna a resposta caso a execução da requisição tenha sido bem sucedida, retornando por sua vez uma versão .JSON() da resposta/response. Dentro do .JSON() retornado, um segundo .then() irá acessar os dados do código, retornando assim o 'elogio' do exemplo acima disponível no campo value do response.JSON(). Caso exista falha na execução da requisição, caberá ao .catch() tratá-lo, armazenando o erro como ARGUMENTO de sua função interna. O .catch() também pega/armazena em si todo e qualquer erro ocasionado em algum dos .then(). 


//ASYNC & AWAIT - 

//async significa assincrono, enquanto await significa esperam!

/* const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread. */


/* const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);
  
  console.log(result);
};

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread. */


//O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

//Um código executado de modo assincrono é um cujas funções não precisam esperar uma "cadeia de execuções", ou seja, não precisam esperar uma ordenação de execuções, onde a execução de uma depedende da execução da outra. Uma função assincrona pode ser executada de modo paralelo, sem interromper o andamento de outras funções, desta forma, em tese, não obedecendo uma cadeia de execuções. Um código sincrono, por outro lado, é um código cujas funções obedecem uma cadeia de execuções, seguindo um passo a passo em seu desenvolvimento, onde a execução de uma função depende da execução da função anterior, visto que o javascript trabalha a execução de seus códigos, em regra, de cima para baixo.

//Quando você tem que enfileirar várias callbacks , que problema surge?

//complexidade desnecessária de código, dificultando a leitura do mesmo, ocassionando assim o chamado callback hell.

/* const starWarsQuote = () => {
	const url = 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote';
	  fetch(url)
	    .then(response => response.json())
	    .then(data => document.getElementById('quote-container').innerText = data.starWarsQuote)
            .catch(error => console.log(error))
}; */


//ao se trabalhar com API's, ao se fazer uma requisição, recebemos dados que devem ser convertidos para o .JSON(). Os dados do .JSON() são parecidos com o formato de um objeto cujas chaves vem entre aspas, sejam simples ou duplas.

function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}

//PARTE 2 - REFATORANDO COM FETCH API
function fetchPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    .then((response) => response.json())
    .then((data) => {
      const pokemon = {
        name: data.name,
        imageUrl: data.sprites.front_default,
      }
      append(pokemon);
    })
  }



//PARTE 1 - FAZENDO COM FETCH API
/* function fetchPokemon(pokemon) {
  const promise = (fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`));

  promise.then((response) => {
    const responseJson = response.json();

    responseJson.then((data) => {
      const pokemon = {
        name: data.name,
        imageUrl: data.sprites.front_default,
      }
      append(pokemon);
    })
  })
} */

window.onload = fetchPokemon('charmeleon');
