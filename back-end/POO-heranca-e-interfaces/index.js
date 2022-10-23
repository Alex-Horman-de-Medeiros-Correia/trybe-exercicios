"use strict";
class Animal {
    constructor(nome, niver) {
        this.nome = nome;
        this.niver = niver;
    }
    ;
    get idade() {
        const timeDiff = Math.abs(Date.now() -
            new Date(this.niver).getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
}
class Mamifero extends Animal {
    Andando() {
        console.log(`${this.nome} está andando!`);
    }
}
class Ave extends Animal {
    Voar() {
        console.log(`${this.nome} está voando`);
    }
}
/* const a1 = new Mamifero('tigre', new Date(Date.parse('September 28, 1990')));

const animalIdade = (animal: Animal) => {
    console.log(animal.idade);
}

animalIdade(a1);

a1.Andando(); */
const aguia = new Ave('águia', new Date(Date.parse('Jun 07, 1994')));
const Idade = (animal) => {
    console.log(animal.idade);
};
Idade(aguia);
aguia.Voar();
