"use strict";
class PessoaFisica {
    constructor(name, cpf) {
        this._id = PessoaFisica.newId();
        this._name = name;
        this._cpf = cpf;
    }
    static newId() {
        return this.lastId++;
    }
    get id() { return this._id; }
    ;
    get name() { return this._name; }
    ;
    get cpf() { return this._cpf; }
    ;
    showIdentification() {
        console.log(this.id, this._cpf);
    }
}
PessoaFisica.lastId = 0;
class PessoaJur {
    constructor(name, cnpj) {
        this._id = PessoaJur.newId();
        this._name = name;
        this._cnpj = cnpj;
    }
    static newId() {
        return this.lastId++;
    }
    get id() { return this._id; }
    ;
    get name() { return this._name; }
    ;
    get cnpj() { return this._cnpj; }
    ;
    showIdentification() {
        console.log(this.id, this._cnpj);
    }
}
PessoaJur.lastId = 0;
class Contrato {
    constructor(corretor) {
        this.corretor = corretor;
    }
    static get number() { return this._number; }
}
Contrato._number = 0;
const pf1 = new PessoaFisica('alex', '6666666666');
const pf2 = new PessoaFisica('andre', '77777777777');
const pj1 = new PessoaJur('aledrethur', '9999999999');
const pj2 = new PessoaJur('ltda barra', '55555555555');
const myfunc = (identification) => {
    identification.showIdentification();
};
myfunc(pf1);
myfunc(pf2);
myfunc(pj1);
myfunc(pj2);
const c1 = new Contrato(pf1);
console.log(`${c1.corretor.name} possui contrato ativo, de cpf ${c1.corretor.cpf}`);
const c2 = new Contrato(pj1);
console.log(`${c2.corretor.name} possui contrato ativo, de cpf ${c2.corretor.cnpj}`);
