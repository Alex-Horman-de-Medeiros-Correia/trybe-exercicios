// const fetch = require('node-fetch');

const fazRequisição = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(data => console.log(data.results));
}

fazRequisição();
