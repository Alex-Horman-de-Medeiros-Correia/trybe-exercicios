// escreva greet abaixo
/* const greet = (usuario, comprimento) => usuario === 'John' && comprimento === undefined ? `${comprimento = 'Hi'} ${usuario}`:`${comprimento} ${usuario}`; */

const greet = (usuario, comprimento = 'Hi') => `${comprimento} ${usuario}`;

//no caso do parametro DEFAULT, a atribuição de argumento inexistente só vai 'tapar buraco' da chamada abaixo que tiver faltando, de fato, um argumento. Caso contrário, o argumento existente na chamada irá sobressair.
    

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'