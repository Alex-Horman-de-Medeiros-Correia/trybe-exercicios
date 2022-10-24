"use strict";
class Character {
}
class MeleeCharacter extends Character {
    constructor(nome, special) {
        super();
        this.nome = nome;
        this.special = special;
    }
    talk() {
        console.log(`o personagem ${this.nome} está falando`);
    }
    specialMove() {
        console.log(`poder especial de curto alcance: ${this.special}`);
    }
}
class LongRangeCharacter extends Character {
    constructor(nome, special) {
        super();
        this.nome = nome;
        this.special = special;
    }
    talk() {
        console.log(`o personagem ${this.nome} está falando`);
    }
    specialMove() {
        console.log(`poder especial de longo alcance: ${this.special}`);
    }
}
const myFunc = (character) => {
    character.talk();
    character.specialMove();
};
const curto = new MeleeCharacter('Sagat', 'laminas');
const longo = new LongRangeCharacter('Ryu', 'haduken');
myFunc(curto);
myFunc(longo);
