"use strict";
class myClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return `${myParam + this.myNumber} é o resultado!`;
    }
}
const num = new myClass(32);
console.log(num.myFunc(30));
