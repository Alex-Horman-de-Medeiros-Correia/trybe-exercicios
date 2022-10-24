class Animal {

    constructor(public nome: string, public idade: number) {};

    mover() {
        console.log(`o ${ this.nome } está se movendo`);
    }

    age() {
        console.log(`o ${ this.nome } possui ${ this.idade } anos de idade`);
    }
}

class felino extends Animal{
    mover() {
        super.age();
        console.log(`o ${ this.nome } está ronronando`);
    }
}

class inseto extends Animal {
    mover() {
        super.mover(); // aqui o método mover se mantém intacto conforme definido na superclasse
        console.log(`a ${ this.nome } está zumbindo`);
    }
}

const an = new Animal('humano', 100);
const fe = new felino('gato', 10);
const ins = new inseto('abelha', 1);

const myFunc = (animal: Animal) => {
    return animal.mover();
}

myFunc(an);
myFunc(fe);
myFunc(ins);