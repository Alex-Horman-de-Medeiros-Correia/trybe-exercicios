"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setApproved = exports.atualizarAprovacao = exports.estudantesAprovados = exports.paraCadaEstudante = void 0;
const apoioParaFunc = {
    numeros: [0.9, 0.8, 0.7, 0.6, 0.1],
    letras: ['A', 'B', 'C', 'D', 'E'],
};
function pegandoLetras(myNumber) {
    const myNumbers = apoioParaFunc.numeros;
    const myLetters = apoioParaFunc.letras;
    for (let i = 0; i < myNumbers.length; i += 1) {
        if (myNumber >= myNumbers[i])
            return myLetters[i];
    }
    return 'F';
}
// coletando notas
const enviandoLetras = (diciplina) => (Object.assign(Object.assign({}, diciplina), { notaAmericana: pegandoLetras(diciplina.nota) }));
// converter
const paraCadaEstudante = (estudante) => (Object.assign(Object.assign({}, estudante), { diciplinas: estudante.diciplinas.map(enviandoLetras) }));
exports.paraCadaEstudante = paraCadaEstudante;
// determinar
const estudantesAprovados = ({ diciplinas }) => diciplinas.every(({ nota }) => nota > 0.7);
exports.estudantesAprovados = estudantesAprovados;
// atualizar
const atualizarAprovacao = (estudante) => {
    console.log(`a pessoa de nome ${estudante.nome} foi aprovada`);
    estudante.diciplinas.forEach(({ nome, notaAmericana }) => {
        console.log(`diciplina: ${nome}, nota Americana: ${notaAmericana}`);
    });
};
exports.atualizarAprovacao = atualizarAprovacao;
function setApproved(estudantes) {
    estudantes
        .map(paraCadaEstudante)
        .filter(estudantesAprovados)
        .map(atualizarAprovacao);
}
exports.setApproved = setApproved;
