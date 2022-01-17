const numeros = require('./loginValidation');

//describe corresponde a um bloco onde diversos testes podem ser agrupados, organizando assim diferentes grupos caso necessário.

//expect - colocamos aquilo que esperamos que aconteça.

//toEqual - descreve valores estritamente iguais dentro de arrays e objetos.

describe('requisito 1', () => {
  test ('a função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(true).toEqual(numeros([1, 2, 3, 4, 5]));
  });
});

describe('requesito 2', () => {
  test(`a função recebe [1, 2, '3', 4, 5] e retorna false`, () => {
    expect(false).toEqual(numeros([1, 2, '3', 4, 5]));
  });
});

describe('requisito 3', () => {
  test(`a função recebe [' '] e retorna false`, () => {
    expect(false).toEqual(numeros([' ']));
  });
});
