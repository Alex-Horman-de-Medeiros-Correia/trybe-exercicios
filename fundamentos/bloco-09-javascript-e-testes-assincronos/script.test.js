/* test('Não deveria passar!', (done) => {
    setTimeout(() => {
    try {  
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
        done(error);
    }
    }, 500);
  }); */

const { TestWatcher } = require("jest");

  /* const asyncSum = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b + 1;
      callback(result);
    }, 500);
  };
  
  test('Testando asyncSum, soma 5 mais 10', (done) => {
    asyncSum(5, 10, (result) => {
      try {
        expect(result).toBe(15);
        done();
      } catch (error) {
        done(error);
      }
    });
  }); */

// cicles.test.js

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};


/* beforeEach(() => { //aqui o beforeEach é a primeira coisa a ser executada ANTES dos testes, ou seja, é o primeiro ciclo, representando o SETUP. Aqui, especificamente, nosso beforeEach vai adicionar ao nosso array o nome de uma nova cidade e isso vai ocorrer a cada rodada de teste. A cada teste o nome da cidade será recolocado/reatribuído.
    cities = ['Pindamonhangaba'];
  });
  
  afterEach(() => { //aqui o afterEach é a última coisa a acontecer, isto é, após e sempre após o teste. Trata-se do terceiro e último ciclo, entrando em ação apenas após o teste, e esse ciclo tem como nome TEARDOWN. Aqui, especificamente, o nosso afterEach irá limpar o nosso array a cada rodada de teste, isto é, após um teste o array será limpo / zerado, para que dessa forma o ciclo dos 3 possa recomeçar.
    cities = [];
  });
  
  test('Testa a função addCity utilizando o beforeEach', () => {
    expect.assertions(3);
    addCity('Piraporinha');
    expect(cities).toHaveLength(2);
    expect(cities).toContain('Pindamonhangaba');
    expect(cities).toContain('Piraporinha');
  });
  
  test('Testa a função removeCity utilizando o beforeEach', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  }); */


  /* describe('Agrupa o primeiro bloco de testes', () => {
    beforeEach(() => {
      cities = ['Pindamonhangaba'];
    });
    
    afterEach(() => {
      cities = [];
    });
    
    test('Testa a função addCity dentro do primeiro bloco de testes', () => {
      expect.assertions(3);
      addCity('Piraporinha');
      expect(cities).toHaveLength(2);
      expect(cities).toContain('Pindamonhangaba');
      expect(cities).toContain('Piraporinha');
    });
    
    test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
      expect.assertions(2);
      removeCity('Pindamonhangaba');
      expect(cities).not.toContain('Pindamonhangaba');
      expect(cities).toHaveLength(0);
    });
  });
  
  describe('Agrupa o segundo bloco de testes', () => {
    beforeEach(() => {
      cities = ['Tangamandapio'];
    });
    
    afterEach(() => {
      cities = [];
    });
    
    test('Testa a função addCity dentro do segundo bloco de testes', () => {
      expect.assertions(3);
      expect(cities).toHaveLength(1);
      expect(cities).not.toContain('Pindamonhangaba');
      expect(cities).toContain('Tangamandapio');
    });
    
    test('Testa a função removeCity dentro do segundo bloco de testes', () => {
      expect.assertions(2);
      removeCity('Tangamandapio');
      expect(cities).not.toContain('Pindamonhangaba');
      expect(cities).toHaveLength(0);
    });
  }); */


  /* const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  describe('veja se a callback recebida tem suas letras transformadas em maiusculas', () => {
    
    test('callback into maiusculas', (done) => {
        uppercase('alex', (str) => {
            try {
                expect(str).toBe('ALEX');
                done();
            } catch(error) {
                done(error);
            }
        })
    })
  }) */



  