import Mocha from "mocha";
import { expect } from "chai";
import { paraCadaEstudante } from '../src'

const dist = {
    mat: 'matemática',
};

describe('testando a função paraCadaEstudante', function() {
    describe('quando a nota é maior ou igual a 0.9', function() {
        it('se retorna A', function() {
            const aluno = {
                nome: 'Alex',
                diciplinas: [
                    { nome: dist.mat, nota: 0.9 }
                ],
            };
    
            const { diciplinas: [{ notaAmericana }] } = paraCadaEstudante(aluno);
    
            expect(notaAmericana).to.be.equals('A');
        })
    });

    describe('quando a nota é maior ou igual a 0.8 e menor que 0.9', function() {
        it('se retorna B', function() {
            const aluno = {
                nome: 'Alex',
                diciplinas: [
                    { nome: dist.mat, nota: 0.8 }
                ],
            };
    
            const { diciplinas: [{ notaAmericana }] } = paraCadaEstudante(aluno);
    
            expect(notaAmericana).to.be.equals('B');
        })
    });

    describe('quando a nota é maior ou igual a 0.7 e menor que 0.8', function() {
        it('se retorna C', function() {
            const aluno = {
                nome: 'Alex',
                diciplinas: [
                    { nome: dist.mat, nota: 0.7 }
                ],
            };
    
            const { diciplinas: [{ notaAmericana }] } = paraCadaEstudante(aluno);
    
            expect(notaAmericana).to.be.equals('C');
        })
    });

    describe('quando a nota é maior ou igual a 0.6 e menor que 0.7', function() {
        it('se retorna D', function() {
            const aluno = {
                nome: 'Alex',
                diciplinas: [
                    { nome: dist.mat, nota: 0.6 }
                ],
            };
    
            const { diciplinas: [{ notaAmericana }] } = paraCadaEstudante(aluno);
    
            expect(notaAmericana).to.be.equals('D');
        })
    });

    describe('quando a nota é maior ou igual a 0.1 e menor que 0.6', function() {
        it('se retorna E', function() {
            const aluno = {
                nome: 'Alex',
                diciplinas: [
                    { nome: dist.mat, nota: 0.3 }
                ],
            };
    
            const { diciplinas: [{ notaAmericana }] } = paraCadaEstudante(aluno);
    
            expect(notaAmericana).to.be.equals('E');
        })
    });

    describe('quando a nota é menor que 0.1', function() {
        it('se returna F', function() {
            const aluno = {
                nome: 'Alex',
                diciplinas: [
                    { nome: dist.mat, nota: 0.0 }
                ],
            };
    
            const { diciplinas: [{ notaAmericana }] } = paraCadaEstudante(aluno);
    
            expect(notaAmericana).to.be.equals('F');
        })
    });
})