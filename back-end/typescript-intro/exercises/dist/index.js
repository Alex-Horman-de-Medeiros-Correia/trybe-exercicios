"use strict";
// ./index.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.areaTriangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.areaTriangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.areaTriangle(100, 200)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.areaSquare2(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.areaSquare2(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.areaSquare2(100)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.areaSquare(10, 10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.areaSquare(5, 5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.areaSquare(100, 100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);
console.log(`a área de um losango que tem D = 32cm e d = 18cm: ${Exercise.losango(32, 18)}`);
console.log(`a área de um losango que tem D = 200cm e d = 50cm: ${Exercise.losango(200, 50)}`);
console.log(`a área de um losango que tem D = 75cm e d = 25cm: ${Exercise.losango(75, 25)}`);
console.log(`a área de um círculo de raio igual 25cm: ${Exercise.areaCircle(25)}`);
console.log(`a área de um círculo de raio igual 100cm: ${Exercise.areaCircle(100)}`);
console.log(`a área de um círculo de raio igual 12,5cm: ${Exercise.areaCircle(12.5)}`);
