/* // apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const requisitionEspecification = {
      method: 'GET',
      headers: {'accept': 'application/json'}
  }

  fetch(API_URL, requisitionEspecification)
    .then((response) => response.json())
    .then((data) => append(data.joke))
    .catch((error) => console.log(error))
};

function append(piada) {
    const h2 = document.querySelector('h2');

    h2.innerHTML = piada;
} */

window.onload = () => fetchJoke();