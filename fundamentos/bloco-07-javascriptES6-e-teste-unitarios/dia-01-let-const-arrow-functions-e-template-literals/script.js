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

const estudante = {
    nome: "Maria",
    idade: 20,
}

estudante.nome = "Alex";
estudante.idade = 31;

console.log(estudante);

//A variável VAR apresenta comportamento onde pode ser chamada fora do escopo em que fora criada, embora, ainda assim, deva ser chamada dentro de algum escopo geral (ex: caso esteja dentro de uma function, não poderá ser chamada fora da mesma).

//Diferente do VAR, o LET não pode ser chamada fora do escopo que fora criada.

//o CONST deve ser utilizado sempre que não precisarmos redefinir uma variável, pois para isso nos serve o LET.



