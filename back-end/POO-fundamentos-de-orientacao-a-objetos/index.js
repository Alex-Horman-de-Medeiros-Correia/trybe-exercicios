"use strict";
class Pessoa {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this._idade = idade;
        this._peso = peso;
        this.altura = altura;
    }
    pegarIdade() {
        return this._idade;
    }
    get meuPeso() {
        return this._peso;
    }
    set idade(novaIdade) {
        if (novaIdade >= 0 && novaIdade < 200) {
            this._idade = novaIdade;
        }
    }
}
const p1 = new Pessoa('Alex', 32, 85, 175);
p1.nome = 'Alexxxx';
console.log(p1.nome); // acesso de variavel publica
console.log(p1.pegarIdade()); // metodo publico tentando manipular atributo privado
console.log(p1.meuPeso); // manipular atributo privado com se fosse publico
p1.idade = 17;
console.log(`nova idade: ${p1.idade}`); // metodo com setter para manipular atributo privado como se fosse publico
console.log(`randolyn: ${p1.altura}`);
