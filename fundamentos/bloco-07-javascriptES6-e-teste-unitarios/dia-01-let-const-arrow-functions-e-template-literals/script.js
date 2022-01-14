/* function dentroEscopo () {

 for (const idade = 31; idade <= 100; idade += 1) {

    console.log(idade);

}

     console.log("fora do escopo do FOR", idade);

      if (true) {
        let nome = "alex";
    }

    console.log("fora do escopo do IF" , nome)

} 

dentroEscopo ();

*/

/* const estudante = {
    nome: "Maria",
    idade: 20,
}

estudante.nome = "Alex";
estudante.idade = 31;

console.log(estudante); */

//A variável VAR apresenta comportamento onde pode ser chamada fora do escopo em que fora criada, embora, ainda assim, deva ser chamada dentro de algum escopo geral (ex: caso esteja dentro de uma function, não poderá ser chamada fora da mesma).

//Diferente do VAR, o LET não pode ser chamada fora do escopo que fora criada.

//o CONST deve ser utilizado sempre que não precisarmos redefinir uma variável, pois para isso nos serve o LET.


/* if (true) {
    // inicio do escopo do if
    const userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20 */


/*   const userName = 'Isabella';
const userName = 'Lucas';
console.log(userName); // Resultado: Lucas */

/* const languages = ['html', 'css', 'javascript'];

languages.push('flexbox');
languages = ['react'];

console.log(languages); */


/* age = 31;

const age;

console.log(age); */


//TEMPLATE LITERALS
//Nova forma de concatenar strings com o ES6 sem a necessidade de '+' e aspas.

/* const nameComplete = 'alex horman de medeiros correia';
console.log(`bemvindo, senhor: ${nameComplete}`); */

// Com o template literals

/* const heros = 'clark kent';
console.log(`olá, senhor, ${heros}
Como vai querer o chá?
-me surprenda, por favor!
`); */


//ARROW FUCTIONS - funções anônimas

/* const printName = function () {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName()); */

/* const multiplicacao = function(num1, num2){
    return num1 * num2;
}
console.log(multiplicacao(2, 2)); */

/* const multiplicacao = (num1, num2) => {
    return num1 * num2;
}
console.log(multiplicacao(2, 2)); */

/*   const multiplicacao = (num1, num2) => num1 * num2;

  console.log(multiplicacao(2, 2)); */

/* function countWords (frase){
    return frase.split(' ').length;
}
console.log(countWords('e aí, mano, tudo beleza? Vamos com tudo!')); */

/* const countWords = frase => frase.split(' ').length;
console.log(countWords('e aí, mano, tudo beleza? Vamos com tudo!')); */

/* function objetoPessoa (nome, idade, sexo) {
    return {
        nome: nome,
        idade: idade,
        sexo: sexo
    }
}
console.log(objetoPessoa('Alex', 31, 'masculino')); */

/* const objetoPessoa = (nome, idade, sexo) => ({nome: nome, idade: idade, sexo: sexo});

console.log(objetoPessoa('Alex', 31, 'masculino')); */

/* const namePessoal = () => 'Alex Horman';

console.log(namePessoal()); */

/* const diminuir = (num1, num2) => num1 * num2;

console.log(diminuir(1000, 100)); */


//TERNARY OPERATOR - operador ternario

/* const trueExample = (2 + 2 === 4)? `é claro que é` : `é claro que não`;
console.log(trueExample);

const falseExample = (3 + 3 === 8)? `é,pode ser` : `não, idiota, não`;
console.log(falseExample); */

/* const idadeParaDirigir = (age) => (age >= 18 ? `tem idade para dirigir` : `não tem idade o bastante`);

console.log(idadeParaDirigir(17)); */

/* const idadeParaBeber = (age) => {
    if(age >= 18){
        return 'tem idade para beber';
    }else{
        return 'não tem idade. Sossega';
    }
}
console.log(idadeParaBeber(15)); */

/* const idadeParaBeber = (age) => (age >= 18 ? `tem idade, vai fundo` : `não tem idade, criança`);

console.log(idadeParaBeber(19)); */

/* const checkColor = (camisa) => {
    if(camisa === 'do batman'){
        return 'essa camisa é preta'
    }else if(camisa === 'do superman'){
        return 'essa camisa é azul'
    }else{
        return 'não sei a cor dessa camisa'
    }
}
console.log(checkColor('do aguaman')); */


/* function hello() {
  let s = ["Hello World!", "Olá Mundo!"];
  console.log(s[0]);
} */


/* const hello = () => (["Hello World!", "Olá Mundo!"]);

console.log(hello()); */


//EXERCICIOS -

/* const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false); */

/*   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const returnoddsAndEvens = () => {
    oddsAndEvens[0] = 2,
    oddsAndEvens[1] = 3,
    oddsAndEvens[2] = 4,
    oddsAndEvens[3] = 7,
    oddsAndEvens[4] = 10,
    oddsAndEvens[5] = 13

    return oddsAndEvens;
  };

  const New = returnoddsAndEvens();

  console.log(`os numeros ${New} foram retornados de forma crescente`); */

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`os numeros ${oddsAndEvens.sort((a, b) => b - a)} estão distribuidos de forma descrecente`); */

/* const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(factorial(4));

4 * (3 * (2 * (1))) */


/* function fatorialFunction(numero) {
    let resultado = numero;

    for(let i = numero -1; i >= 1; i -= 1) {
        resultado *= i;
    }

    return resultado;
}

console.log(fatorialFunction(4))


const fatorialArrowFunction = (numero) => {
    if (numero >1) {
        return numero * fatorialArrowFunction(numero - 1);
    } else {
        return 1;
    }
}

4 * (3 * (2 * 1))
console.log(fatorialArrowFunction(4))



console.log(fatorialOneLine(4)) */




/* const factorial = (fator) => {

    let result = 1;

    for(let index = 2; index <= fator; index += 1){
        result *= index;
    }

    return result;
}

console.log(factorial(5)); */

/* const fatorial = (number) => number > 1? number * fatorial(number - 1) : 1;

console.log(fatorial(4)); */

/* const fraseMaior = (frase) => {
    let divisao = frase.split(' ');
    let mecanismo = 0;
    let resultado = ' ';

    for(const x of divisao){
        if(x.length > mecanismo){
            mecanismo = x.length;
            resultado = x;
        }
    }
    return resultado;
}*/


/* const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord('vamos lá galera animada')); */


/* let cliques = 0;

const botaoo = document.querySelector(".clica");
const paragrafo = document.querySelector(".paragra");

const imprimeConsole = () => {
    cliques += 1;
    paragrafo.innerHTML = cliques;

    console.log(paragrafo.innerHTML);
}

botaoo.addEventListener('click', imprimeConsole); */



















