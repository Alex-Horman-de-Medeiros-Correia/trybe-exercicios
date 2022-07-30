const { brl, usdToBrl } = require('./brlValue');

console.log(`valor da moeda nacional em dolar: ${brl}`);

console.log(`função de conversão: ${usdToBrl}`);

console.log(`valor do cambio de 10 usd em brl: ${usdToBrl(10)}`);
