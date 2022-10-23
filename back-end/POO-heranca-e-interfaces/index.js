"use strict";
class Pessoa {
    constructor(nome) { this._nome = nome; }
    get nome() {
        return this._nome;
    }
}
class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
}
class PessoaJur extends Pessoa {
    constructor(nome, cnpj) {
        super(nome);
        this._cnpj = cnpj;
    }
}
class ContratoDeVendas {
    constructor() {
        this._assinantes = [],
            this._clausulas = [];
    }
    get assinantes() { return [...this._assinantes]; }
    ;
    get clausulas() { return [...this._clausulas]; }
    ;
    get assunto() { return 'vendas!'; }
    ;
    assinatura(assinante) { this._assinantes.push(assinante); }
    ;
    addClausula(clausula) {
        if (this._assinantes.length > 0) {
            return this._assinantes;
        }
        return this._clausulas.push(clausula);
    }
    descricao() {
        console.log('--------------------');
        console.log(`Contrato: ${this.assunto}`);
        this.clausulas.forEach((clausula) => console.log(`Clausula: ${clausula}`));
        this.assinantes.forEach((assinante) => console.log(`Assinado por: ${assinante.nome}`));
        console.log('---------------------');
    }
}
const s1 = new ContratoDeVendas();
const pp1 = new PessoaFisica('Tony', '123456789');
const pp2 = new PessoaFisica('Lilly', '987654321');
const lp = new PessoaJur('International Sales SA', '23961237162378');
s1.descricao();
s1.addClausula('Foo');
s1.addClausula('Bar');
s1.descricao();
s1.assinatura(pp1);
s1.assinatura(pp2);
s1.descricao();
s1.addClausula('Baz');
s1.assinatura(lp);
s1.descricao();
