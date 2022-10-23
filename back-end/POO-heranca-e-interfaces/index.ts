interface MyInterface {
    myNumber: number,
    myFunc(myParam: number): string,
}

class myClass implements MyInterface {
    constructor(public myNumber: number) {}

    myFunc(myParam: number): string {
        return `${ myParam + this.myNumber } é o resultado!`
    }
}



const num = new myClass(32);

console.log(num.myFunc(30));



