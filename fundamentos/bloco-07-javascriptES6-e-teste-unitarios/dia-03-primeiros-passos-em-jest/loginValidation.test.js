/* const numeros = require('./loginValidation');

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
}); */

/* const removeBebida = require('./loginValidation');

describe('remove sabor de bebida', () => {
  test ('remover agua', () => {
    const bebidas = ['suco', 'agua', 'refri', 'vinho', 'ksuqui', 'groselha', 'garapa'];
    expect(['suco', 'refri', 'vinho', 'ksuqui', 'groselha', 'garapa']).toEqual(removeBebida(bebidas, 'agua'));
  });

  test('remover garapa', () => {
    const bebidas = ['suco', 'agua', 'refri', 'vinho', 'ksuqui', 'groselha', 'garapa'];
    expect(['suco', 'agua', 'refri', 'vinho', 'ksuqui', 'groselha']).toEqual(removeBebida(bebidas, 'garapa'));
  });

  test('remover groselha caso exista', () => {
    const bebidas = ['suco', 'agua', 'refri', 'vinho', 'ksuqui', 'groselha', 'garapa'];
    expect(removeBebida(bebidas, 'groselha')).not.toContain('groselha');
  });
}); */


/* const sum = require('./loginValidation');
const soma = require('./loginValidation');

test ('adiciona 1 e 2 e retorna 3', () => {
  expect(soma(1,2)).toBe(3);
});

test('adciona -33 e 23 e retorna -10', () => {
  expect(soma(-33, 23)).toBe(-10);
}); */


const sommationOf = require('./loginValidation');

test ('testar se a função sommationOf existe', () => {
  expect(typeof sommationOf).toBe('function');
});

test ('espera que a somatoria de 1 seja 1', () => {
  expect(sommationOf(1)).toBe(1);
});

test ('espera que a somatoria de 3 seja 6', () => {
  expect(sommationOf(3)).toBe(6);
});

test ('espera que a somatoria de 5 seja 15', () => {
  expect(sommationOf(5)).toBe(15);
});
