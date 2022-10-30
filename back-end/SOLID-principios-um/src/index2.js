"use strict";
class Flute {
    constructor(name) {
        this.name = name;
    }
    play() {
        console.log(`${this.name} está emitindo melodias`);
    }
}
class Drums {
    constructor(name) {
        this.name = name;
    }
    play() {
        console.log(`${this.name} está fazendo o ar vibrar bem forte`);
    }
}
class Guitar {
    constructor(name) {
        this.name = name;
    }
    play() {
        console.log(`${this.name} está vibrando suas cordas`);
    }
}
class Musician {
    constructor(name, instrument = new Flute('Minha flauta')) {
        this.name = name;
        this.instrument = instrument;
    }
    play() {
        this.instrument.play();
        console.log(`"${this.name}" é quem está comandando a emissão dos sons`);
    }
}
const musician1 = new Musician('Márcia');
const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));
musician1.play();
musician2.play();
musician3.play();
