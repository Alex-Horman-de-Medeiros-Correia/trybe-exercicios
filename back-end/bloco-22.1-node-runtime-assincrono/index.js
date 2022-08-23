const { brl, usdToBrl } = require('./brValue');

const reais = 20;

console.log(`Valor do dolar em reais: ${brl}`);

console.log(`Valor da conversão de ${reais}: ${usdToBrl(reais)}`);
