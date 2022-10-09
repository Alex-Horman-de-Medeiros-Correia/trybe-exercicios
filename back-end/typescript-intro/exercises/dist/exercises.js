"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaCircle = exports.losango = exports.rectangle = exports.areaSquare2 = exports.areaSquare = exports.areaTriangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `òlá, ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} possui ${age} anos de idade`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function areaTriangle(base, altura) {
    return (base * altura) / 2;
}
exports.areaTriangle = areaTriangle;
function areaSquare(base, altura) {
    return base * altura;
}
exports.areaSquare = areaSquare;
function areaSquare2(lado) {
    return lado ** 2;
}
exports.areaSquare2 = areaSquare2;
function rectangle(base, altura) {
    return base * altura;
}
exports.rectangle = rectangle;
function losango(D, d) {
    return (D * d) / 2;
}
exports.losango = losango;
function areaCircle(r) {
    return (r ** 2) * 3.14;
}
exports.areaCircle = areaCircle;
