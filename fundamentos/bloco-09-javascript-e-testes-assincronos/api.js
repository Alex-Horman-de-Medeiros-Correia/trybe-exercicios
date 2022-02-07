// const fetch = require('node-fetch');

function arrayBitcoin() {
    const url = `https://api.coincap.io/v2/assets`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const rank = data.data.filter((element) => element.rank <= 10);
            rank.forEach((element) => append(element.id));
        })
        .catch((error) => console.log(error))

    }

function append(coinsList) {
    const ul = document.querySelector('ul');

    
    const li = document.createElement('li');
    
    li.innerHTML = coinsList;

    
    ul.appendChild(li);
    

}

window.onload = arrayBitcoin;