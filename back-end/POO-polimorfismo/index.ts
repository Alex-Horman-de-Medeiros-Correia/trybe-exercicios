interface Pessoa {
    id: number,
    name: string,
    showIdentification(): void,
}

class PessoaFisica implements Pessoa {
    private static lastId = 0;
    private _name;
    private _id;
    private _cpf;

    constructor(name: string, cpf: string) {
        this._id = PessoaFisica.newId();
        this._name = name;
        this._cpf = cpf;
    }

    private static newId() {
        return this.lastId++;
    }

    get id() { return this._id };
    get name() { return this._name };
    get cpf() { return this._cpf };

    showIdentification(): void {
        console.log(this.id, this._cpf);
    }
}

class PessoaJur implements Pessoa {
    private static lastId = 0;
    private _name;
    private _id;
    private _cnpj;

    constructor(name: string, cnpj: string) {
        this._id = PessoaJur.newId();
        this._name = name;
        this._cnpj = cnpj;
    }

    private static newId() {
        return this.lastId++;
    }

    get id() { return this._id };
    get name() { return this._name };
    get cnpj() { return this._cnpj };

    showIdentification(): void {
        console.log(this.id, this._cnpj);
    }
}

class Contrato<T> {
    static _number = 0;

    constructor(public corretor: T) {}

    static get number() { return this._number }
}


const pf1 = new PessoaFisica('alex', '6666666666');
const pf2 = new PessoaFisica('andre', '77777777777');
const pj1 = new PessoaJur('aledrethur', '9999999999');
const pj2 = new PessoaJur('ltda barra', '55555555555');

const myfunc = (identification: Pessoa) => {
    identification.showIdentification();
}

myfunc(pf1);
myfunc(pf2);
myfunc(pj1);
myfunc(pj2);

const c1 = new Contrato(pf1);
console.log(`${ c1.corretor.name } possui contrato ativo, de cpf ${ c1.corretor.cpf }`);

const c2: Contrato<PessoaJur> = new Contrato(pj1);
console.log(`${ c2.corretor.name } possui contrato ativo, de cnpj ${ c2.corretor.cnpj }`);