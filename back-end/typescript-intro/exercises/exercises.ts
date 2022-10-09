export function greeter(name: string): string {
    return `òlá, ${ name }`;
}

export function personAge(name: string, age: number): string {
    return `${ name } possui ${ age } anos de idade`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function areaTriangle(base: number, altura: number): number {
    return (base * altura)/2;
}

export function areaSquare(base: number, altura: number): number {
    return base * altura;
}

export function areaSquare2(lado: number): number {
    return lado ** 2;
}

export function rectangle(base: number, altura: number): number {
    return base * altura;
}

export function losango(D: number, d: number): number {
    return (D * d)/2;
}

export function areaCircle(r: number): number {
    return (r ** 2) * 3.14;
}
