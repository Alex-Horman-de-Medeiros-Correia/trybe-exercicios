/* const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke(); */

//fetch() significa BUSCAR! BUSCAR A URL para então implementá-la no código.

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported

//O fetch que significa BUSCAR acaba por retornar, abrigar em seu escopo a requisição que é a URL. O PRIMEIRO .then() então retorna a resposta caso a execução da requisição tenha sido bem sucedida, retornando por sua vez uma versão .JSON() da resposta/response. Dentro do .JSON() retornado, um segundo .then() irá acessar os dados do código, retornando assim o 'elogio' do exemplo acima disponível no campo value do response.JSON(). Caso exista falha na execução da requisição, caberá ao .catch() tratá-lo, armazenando o erro como ARGUMENTO de sua função interna. O .catch() também pega/armazena em si todo e qualquer erro ocasionado em algum dos .then(). 