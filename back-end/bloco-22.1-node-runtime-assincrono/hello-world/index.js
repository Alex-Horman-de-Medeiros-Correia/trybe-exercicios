const { sub, sum, mult, div } = require('./operacoes');
const { question, questionInt } = require('readline-sync');


console.log('Calculadora Simples!');

const num1 = questionInt('Diga um numero: ');
const oper = question('Digite uma operacao (+, -, *, /): ');
const num2 = questionInt('Diga um segundo numero: ');

switch (oper) {
    case '+':
        sum(num1, num2)
        break;
    case '-':
        sub(num1, num2)
        break;
    case '*':
        mult(num1, num2)
        break;
    case '/':
        div(num1, num2)
        break;
    default:
        console.log('operacao não encontrada!');
};
