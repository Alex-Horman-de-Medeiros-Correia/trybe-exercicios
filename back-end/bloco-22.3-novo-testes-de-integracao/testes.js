const { expect } = require('chai');
const calculaSituacao = require('./examples/calculaSituacao');

describe('quando a media for menor que 7', function() {

    it('retorna reprovação', function(){
        const resposta = calculaSituacao(4);

        expect(resposta).to.be.equals('reprovacao');
    });

});