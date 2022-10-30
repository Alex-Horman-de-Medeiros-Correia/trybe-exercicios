import chai, { expect } from "chai";
import Mocha from "mocha";
import { estudantesAprovados } from "../src"

const dis = {
    mat: 'matemática',
    hist: 'história',
};

describe('testando a função estudantes aprovados', function() {
    describe('quando a nota é maior que 0.7', function() {
        it('se é aprovado', function() {
            const diciplinas = [
                { nome: dis.mat, nota: 0.8 },
                { nome: dis.hist, nota: 0.9 }
            ];

            const estudantes = {
                nome: 'test',
                diciplinas: diciplinas
            };

            const result = estudantesAprovados(estudantes);

            expect(result).to.be.equal(true);
        });
    })

    describe('quando APENAS UMA nota é menor que 0.7', function() {
        it('se é reprovado e retorna false', function() {
            const diciplinas = [
                { nome: dis.mat, nota: 0.2 },
                { nome: dis.hist, nota: 0.9 }
            ];

            const estudantes = {
                nome: 'test',
                diciplinas: diciplinas
            };

            const result = estudantesAprovados(estudantes);

            expect(result).to.be.equal(false);
        });
    })

    describe('quando a nota é MENOR que 0.7', function() {
        it('se é reprovado e retorna false', function() {
            const diciplinas = [
                { nome: dis.mat, nota: 0.1 },
                { nome: dis.hist, nota: 0.3 }
            ];

            const estudantes = {
                nome: 'test',
                diciplinas: diciplinas
            };

            const result = estudantesAprovados(estudantes);

            expect(result).to.be.equal(false);
        });
    })
})