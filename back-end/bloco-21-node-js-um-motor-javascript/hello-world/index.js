const { sum, mult, sub, divi } = require('./operadores');
const { question, questionInt } = require('readline-sync');

console.log('calculadora simples!!!');

const numeroUm = questionInt('digite um numero ');
const operacao = question('digite um operador (+, -, *, /) ');
const numeroDois = questionInt('digite mais um numero ');

switch (operacao) {
    case '+':
        sum(numeroUm, numeroDois)
        break;
    case '-':
        sub(numeroUm, numeroDois)
        break;
    case '*':
        mult(numeroUm, numeroDois)
        break;
    case '/':
        divi(numeroUm, numeroDois)
        break;
    default:
        console.log('operador não existente!');
};
