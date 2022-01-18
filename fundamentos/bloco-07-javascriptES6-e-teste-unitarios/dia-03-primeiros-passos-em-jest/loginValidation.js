/* const numeros = (array) => {
  for (let index = 0; index < array.length; index += 1){
    if(typeof array[index] !== 'number'){
      return false;
    }
  }
  return true;
};

module.exports = numeros; */


/* const removeBebida = (array, remover) => {
  array.splice(array.indexOf(`${remover}`), 1);
  return array;
};

module.exports = removeBebida; */

//testes unitários - códigos que testam uma unidade de código. um trecho de código. Uma função.

/* const sum = (para1, para2) => para1 + para2;

module.exports = sum; */

const sommationOf = (number) => {
  let soma = 0;
  for (let index = 1; index <= number; index += 1){
    soma += index;
  }
  return soma;
}

module.exports = sommationOf;

