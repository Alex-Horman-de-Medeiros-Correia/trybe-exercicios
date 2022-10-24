abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;
}

class MeleeCharacter extends Character {
    constructor(public nome: string, private special: string) {
        super();
    }

    talk(): void {
        console.log(`o personagem ${ this.nome } está falando`);
    }

    specialMove(): void {
        console.log(`poder especial de curto alcance: ${ this.special }`);
    }
}

class LongRangeCharacter extends Character {
    constructor(public nome: string, private special: string) {
        super();
    }

    talk(): void {
        console.log(`o personagem ${ this.nome } está falando`);
    }

    specialMove(): void {
        console.log(`poder especial de longo alcance: ${ this.special }`);
    }
}

const myFunc = (character: Character) => {
    character.talk();
    character.specialMove();
}

const curto = new MeleeCharacter('Sagat', 'laminas');
const longo = new LongRangeCharacter('Ryu', 'haduken');

myFunc(curto);
myFunc(longo);