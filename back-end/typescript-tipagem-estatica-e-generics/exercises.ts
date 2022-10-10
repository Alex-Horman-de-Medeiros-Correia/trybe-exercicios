function getArray<T>(itens: T[]): T[] {
    return new Array<T>().concat(itens);
}

const arrayStrings = getArray<String>(['carro', 'biblioteca', 'casa']);

arrayStrings.push('game');

console.log(arrayStrings);

const arrayNumbers = getArray<Number>([2, 3, 6]);

arrayNumbers.push(8);

console.log(arrayNumbers);






