interface Contrato {
    assunto: string,
    clausulas: string[],
    assinantes: Pessoa[],

    descricao(): void,
}

class Pessoa {
    private _nome: string;

    constructor(nome: string) { this._nome = nome }

    get nome() {
        return this._nome;
    }
}

class PessoaFisica extends Pessoa {
    private _cpf;

    constructor(nome: string, cpf: string) {
        super(nome);
        this._cpf = cpf;
    }

    get cpf() {
        return this._cpf;
    }
}

class PessoaJur extends Pessoa {
    private _cnpj;

    constructor(nome: string, cnpj: string) {
        super(nome);
        this._cnpj = cnpj;
    }
}

class ContratoDeVendas implements Contrato {

    private _assinantes: Pessoa[];
    private _clausulas: string[]

    constructor() {
        this._assinantes = [],
        this._clausulas = []
    }

    get assinantes() { return [ ...this._assinantes ] };
    get clausulas() { return [ ...this._clausulas ] };
    get assunto() { return 'vendas!' };

    assinatura(assinante: Pessoa) { this._assinantes.push(assinante) };

    addClausula(clausula: string) {
        if (this._assinantes.length > 0) {
            return this._assinantes;
        }

        return this._clausulas.push(clausula);
    }

    descricao(): void {
        console.log('--------------------');
        console.log(`Contrato: ${ this.assunto }`);

        this.clausulas.forEach((clausula) => console.log(`Clausula: ${ clausula }`));

        this.assinantes.forEach((assinante) => console.log(`Assinado por: ${ assinante.nome }`));

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







