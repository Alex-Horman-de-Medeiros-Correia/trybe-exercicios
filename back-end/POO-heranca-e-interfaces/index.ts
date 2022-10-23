class Superclass {

    constructor(public isSuper: boolean) { this.isSuper = true }

    sayHello() {
        console.log('Olá, mundo!');
    }
}

class SubClass extends Superclass {

    constructor() {
        super()
        this.isSuper = false;
    }

}

const myFunc = (objeto: Superclass) => {

    objeto.sayHello();

    console.log(objeto.isSuper ? 'Super!' : 'Sub!');
    

}

const supe = new Superclass();
const sub = new SubClass();

myFunc(supe);
myFunc(sub);
