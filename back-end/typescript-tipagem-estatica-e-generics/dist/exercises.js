"use strict";
function getArray(itens) {
    return new Array().concat(itens);
}
const arrayStrings = getArray(['carro', 'biblioteca', 'casa']);
arrayStrings.push('game');
console.log(arrayStrings);
const arrayNumbers = getArray([2, 3, 6]);
arrayNumbers.push(8);
console.log(arrayNumbers);
