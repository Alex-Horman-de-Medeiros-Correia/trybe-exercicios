/* const sum = (...rest) => {
    return rest[0] + rest[1] + rest[2] + rest[3];
}

console.log(sum(1, 2, 3, 4)); */

const soma = (...rest) => {
    return rest.reduce( (acumulador, valorCorrente) => {
        return acumulador + valorCorrente;
    }, 0)
}

console.log(soma(1, 2, 3, 4));