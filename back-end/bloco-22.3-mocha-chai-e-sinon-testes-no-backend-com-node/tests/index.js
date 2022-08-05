const { expect } = require('chai');

const calculaSituacao = require('../media');

/* console.log('Quando a média for menor que 7, retorna "reprovacao":'); */

/* const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// console:
// Quando a média for menor que 7, retorna "reprovacao":
// Ok 🚀

console.log('Quando a média for maior que 7, retorna "aprovacao":');

const respostaCenario2 = calculaSituacao(9);
if (respostaCenario2 === 'aprovacao') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// console:
// Quando a média for maior que 7, retorna "aprovacao":
// Ok 🚀

console.log('Quando a média for igual a 7, retorna "aprovacao":');

const respostaCenario3 = calculaSituacao(7);
if (respostaCenario3 === 'aprovacao') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
} */
// console:
// Quando a média for igual a 7, retorna "aprovacao":
// Resposta não esperada 🚨

describe('Se a média for menor que 7...', () => {
  it('será reprovado', () => {
    const reprovacao = calculaSituacao(4);

    expect(reprovacao).equals('reprovacao');
  });
});

describe('Se a media for maior que 7...', () => {
  it('Será aprovado', () => {
    const aprovacao = calculaSituacao(8);

    expect(aprovacao).to.be.equals('aprovacao');
  });
});

describe('Se a media for igual a 7...', () => {
  it('Será aprovado', () => {
    const aprovacao = calculaSituacao(7);

    expect(aprovacao).to.be.equals('aprovacao');
  });
});

