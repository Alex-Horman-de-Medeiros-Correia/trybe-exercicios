/* let fatorial = 1;

for (let index = 7; index > 0; index -= 1) {
    fatorial *= index;
    
}

console.log(fatorial); */

/* let word = 'Gilgamesh';
let invertedWord = '';

for (let index = 0; index < word.length; index += 1) {
    invertedWord += word[word.length -1 -index];
}

console.log(invertedWord); */


/* let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if(array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}

for (let index = 0; index < array.length; index += 1) {
    if(array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}

console.log(menorPalavra, 'menorPalavra');
console.log(maiorPalavra, 'maiorPalavra'); */


let numerosPrimos = '';

for (let index = 0; index <= 50; index += 1) {
    if(index % 2 !== 0) {
        numerosPrimos += index + ",";
    }
}

//console.log(numerosPrimos);

